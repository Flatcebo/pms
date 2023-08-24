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
  const { id, title, startDate, endDate } = req.body;

  const foundUser = await client.project.findUnique({
    where: {
      id,
    },
  });

  console.log(startDate, endDate);

  let name = foundUser?.name;
  const startedAt = startDate
    ? date.parse(startDate, "YYYY-MM-DD HH:mm:ss", true)
    : foundUser?.startedAt;

  const finishedAt = endDate
    ? date.parse(endDate, "YYYY-MM-DD HH:mm:ss", true)
    : foundUser?.finishedAt;

  if (title) {
    name = title;
  }

  await client.project.update({
    where: {
      id,
    },
    data: {
      name,
      startedAt,
      finishedAt,
    },
  });

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
