// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import date from "date-and-time";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    title,
    contents,
    location,
    startDate,
    endDate,
    email,
    startTime,
    endTime,
  } = req.body;

  const userId = await client.user.findUnique({
    where: { email },
  });

  const parsedStartDate = startDate.split(" ")[0].concat(" ", startTime);
  const parsedEndDate = endDate.split(" ")[0].concat(" ", endTime);

  console.log(parsedStartDate, parsedEndDate);

  const startedAt = date.parse(parsedStartDate, "YYYY-MM-DD HH:mm:ss", true);
  const finishedAt = date.parse(parsedEndDate, "YYYY-MM-DD HH:mm:ss", true);

  console.log("AAAA", startedAt, finishedAt);

  if (userId) {
    await client.schedule.create({
      data: {
        title,
        startedAt,
        finishedAt,
        comment: contents,
        userId: userId.id,
      },
    });
  }

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
