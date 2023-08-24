// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      ok: false,
    });
  }

  const foundUser = await client.user.findUnique({
    where: {
      email,
    },
  });

  if (!foundUser) {
    res.json({
      ok: false,
      error:
        "이메일 및 패스워드가 일치하지 않습니다. 확인 후 다시 로그인 해주세요.",
    });
  } else {
    if (foundUser.password !== password) {
      res.json({
        ok: false,
        error:
          "이메일 및 패스워드가 일치하지 않습니다. 확인 후 다시 로그인 해주세요.",
      });
    } else {
      req.session.user = {
        id: foundUser.id,
      };

      await req.session.save();

      res.json({ ok: true, user: req.session.user });
    }
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
