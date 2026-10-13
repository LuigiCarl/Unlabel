import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  const compose = new URL("https://mail.google.com/mail/");
  compose.searchParams.set("view", "cm");
  compose.searchParams.set("fs", "1");
  compose.searchParams.set("to", "luigicarlbrezuela07@gmail.com");
  compose.searchParams.set("su", "UNLABEL inquiry");
  return NextResponse.redirect(compose);
}
