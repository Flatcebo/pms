import withHandler from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = client?.user.findMany({});
  req.body(users);

  console.log(users);

  res.json({ ok: true, users });
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler, isPrivate: false })
);
