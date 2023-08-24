// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import date, { isSameDay } from "date-and-time";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

/**
 * 1. 프로젝트 버튼 클릭 시, 등록 버튼과 기능 일치하여 수정해야 함 완료
 * 2. 원하는 날짜를 파라미터로 받아와야 함 완료
 * 3. 원하는 날짜를 파라미터로 받아왔을 때, 그 날짜에 맞는 데이터를 다시 useSWR로 반환해야 함. 완료
 * 4. 스코어보드 날짜 전환 버튼 이벤트 추가
 */

interface dataType {
  id: number;
  todayToDos: string;
  unToDos: string;
  nextToDos: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const { email, chooseDate: chooseDateProps } = req.query;

    const chooseDate = new Date(chooseDateProps as string);

    const startDate = date.parse(
      date.format(chooseDate, "YYYY-MM-DD 00:00:00", false),
      "YYYY-MM-DD HH:mm:ss",
      true
    );

    const endDate = date.parse(
      date.format(chooseDate, "YYYY-MM-DD 23:59:59", false),
      "YYYY-MM-DD HH:mm:ss",
      true
    );

    // console.log(startDate);
    // console.log(startDate, endDate);

    const userId = await client.user.findUnique({
      where: {
        email: email + "",
      },
      include: {
        ToDoList: {
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          },
        },
      },
    });

    let toDoList = {};

    userId?.ToDoList.map(item => {
      const data: dataType = {
        id: item.id,
        todayToDos: item.todayToDos!,
        unToDos: item.unToDos!,
        nextToDos: item.nextToDos!,
      };

      toDoList = data;
    });

    console.log(toDoList);

    res.json({ ok: true, toDoList });
  }

  if (req.method === "POST") {
    const {
      id,
      todayToDos,
      unToDos,
      nextToDos,
      email,
      chooseDate: chooseDateProps,
    } = req.body;

    const userId = await client.user.findUnique({
      where: { email },
    });

    const chooseDate = new Date(chooseDateProps as string);

    const changeChooseDate = date.parse(
      date.format(chooseDate, "YYYY-MM-DD", false),
      "YYYY-MM-DD",
      true
    );

    const changeNowDate = date.parse(
      date.format(new Date(), "YYYY-MM-DD", false),
      "YYYY-MM-DD",
      true
    );

    const isSameDay = date.isSameDay(changeChooseDate, changeNowDate);

    if (isSameDay) {
      const createdAt = date.parse(
        date.format(new Date(), "YYYY-MM-DD HH:mm:ss", false),
        "YYYY-MM-DD HH:mm:ss",
        true
      );

      const startDate = date.parse(
        date.format(chooseDate, "YYYY-MM-DD 00:00:00", false),
        "YYYY-MM-DD HH:mm:ss",
        true
      );

      const endDate = date.parse(
        date.format(chooseDate, "YYYY-MM-DD 23:59:59", false),
        "YYYY-MM-DD HH:mm:ss",
        true
      );

      try {
        const findData = await client.user.findUnique({
          where: {
            email,
          },
          include: {
            ToDoList: {
              where: {
                createdAt: {
                  gte: startDate,
                  lte: endDate,
                },
              },
            },
          },
        });

        if (findData?.ToDoList.length) {
          console.log("값이 있어용~");

          await client.toDoList.update({
            where: {
              id,
            },
            data: {
              todayToDos,
              unToDos,
              nextToDos,
            },
          });
        } else {
          console.log("값이 없어용~");

          await client.toDoList.create({
            data: {
              todayToDos,
              unToDos,
              nextToDos,
              userId: userId?.id!,
              createdAt,
            },
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      res.json({ ok: false, error: "일정 등록 및 수정은 당일만 가능합니다." });
      return;
    }

    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler, isPrivate: false })
);
