// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import date from "date-and-time";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const projects = await client.project.findMany({});
    const users = await client.user.findMany({});

    res.json({ ok: true, projects, users });
  }

  if (req.method === "POST") {
    const { projectName, startDate, endDate, name } = req.body;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const parsedStartDate = date.parse(
      date.format(start, "YYYY-MM-DD 00:00:00", true),
      "YYYY-MM-DD 00:00:00",
      true
    );

    const parsedEndDate = date.parse(
      date.format(end, "YYYY-MM-DD 00:00:00", true),
      "YYYY-MM-DD 00:00:00",
      true
    );

    console.log(projectName, parsedStartDate, parsedEndDate, name);

    await client.project.create({
      data: {
        name: projectName,
        startedAt: parsedStartDate,
        finishedAt: parsedEndDate,
        comment: "하이",
        isAllDay: "Y",
        departmentId: 1,
      },
    });

    await client.user.create({
      data: {
        name: name,
        phone: "",
        email: "",
        password: "",
        departmentId: 1,
      },
    });

    res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler, isPrivate: false })
);
