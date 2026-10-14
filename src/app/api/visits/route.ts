import { NextResponse } from "next/server";

const counterKey = "unlabel:visitor-sessions";

export async function POST() {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return NextResponse.json({ error: "Visitor counter is not configured." }, { status: 503 });
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["INCR", counterKey]),
      cache: "no-store",
    });
  } catch (error: unknown) {
    console.error("Visitor counter connection failed.", error);
    return NextResponse.json({ error: "Visitor counter service is unreachable." }, { status: 502 });
  }

  if (!response.ok) {
    console.error("Visitor counter service returned an error.", response.status);
    return NextResponse.json({ error: "Visitor counter service failed." }, { status: 502 });
  }

  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || !("result" in result) || typeof result.result !== "number") {
    return NextResponse.json({ error: "Visitor counter returned an invalid response." }, { status: 502 });
  }

  return NextResponse.json({ count: result.result });
}
