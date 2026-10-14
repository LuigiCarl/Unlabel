"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(() => {
    if (typeof window === "undefined") return null;
    const storedCount = window.sessionStorage.getItem("unlabel:visitor-counted");
    return storedCount ? Number(storedCount) : null;
  });

  useEffect(() => {
    const sessionKey = "unlabel:visitor-counted";
    const storedCount = window.sessionStorage.getItem(sessionKey);
    if (storedCount) return;

    let cancelled = false;
    fetch("/api/visits", { method: "POST" })
      .then(async (response) => {
        const body: unknown = await response.json();
        if (!response.ok || !body || typeof body !== "object" || !("count" in body) || typeof body.count !== "number") {
          throw new Error("Visitor counter request failed.");
        }
        if (!cancelled) {
          window.sessionStorage.setItem(sessionKey, String(body.count));
          setCount(body.count);
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) console.error(error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;
  return <p className="visitor-counter" aria-label={`${count.toLocaleString()} visitor sessions`}>Visitors / {count.toLocaleString()}</p>;
}
