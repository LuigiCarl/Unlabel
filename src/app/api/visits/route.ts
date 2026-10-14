import { NextResponse } from "next/server";

const counterKey = "unlabel:visitor-sessions";

export async function POST() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return NextResponse.json({ error: "Visitor counter is not configured." }, { status: 503 });
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["INCR", counterKey]),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Visitor counter service failed." }, { status: 502 });
  }

  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || !("result" in result) || typeof result.result !== "number") {
    return NextResponse.json({ error: "Visitor counter returned an invalid response." }, { status: 502 });
  }

  return NextResponse.json({ count: result.result });
}
