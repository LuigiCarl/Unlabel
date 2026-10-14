"use client";

import { useEffect, useRef, useState } from "react";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);
  const requested = useRef(false);

  useEffect(() => {
    if (requested.current) return;
    requested.current = true;

    let cancelled = false;
    fetch("/api/visits", { method: "POST" })
      .then(async (response) => {
        const body: unknown = await response.json();
        if (!response.ok || !body || typeof body !== "object" || !("count" in body) || typeof body.count !== "number") {
          throw new Error("Visit counter request failed.");
        }
        if (!cancelled) {
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
  return <p className="visit-counter" aria-label={`${count.toLocaleString()} visits`}>Visits / {count.toLocaleString()}</p>;
}
