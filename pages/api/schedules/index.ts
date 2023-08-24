// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const projects = await client.schedule.findMany({});

    res.json({ ok: true, projects });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
