import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  const cookie = req.cookies.get("next-auth.session-token");

  if (!req.nextUrl.pathname.startsWith("/api")) {
    if (!req.nextUrl.pathname.startsWith("/enter")) {
      if (!cookie) {
        req.nextUrl.pathname = "/enter";
        return NextResponse.redirect(req.nextUrl);
      }
    }

    if (req.nextUrl.pathname.startsWith("/admin") && !cookie) {
      req.nextUrl.pathname = "/enter";
      return NextResponse.redirect(req.nextUrl);
    }
    if (req.nextUrl.pathname.startsWith("/enter")) {
      if (cookie) {
        req.nextUrl.pathname = "/";
        return NextResponse.redirect(req.nextUrl);
      }
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/enter", "/project", "/calendar", "/scoreBoard"],
};
