import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
const cookieOptions = {
  cookieName: "randomSession",
  password: "31273987123982713987128945askdjaskldhasjkdhsakjdhaskjdhw",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
