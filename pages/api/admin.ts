import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query.id);

  res.json({
    name: "ProfileSample.png",
    price: 9000,
    content:
      "생토마토로 후레쉬한 소스를 만들어 연어스테이크와 곁들인 슈퍼푸드로 만든 건강한 요리!",
  });
}
