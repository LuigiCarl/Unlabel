import Link from "next/link";

export function Wordmark() {
  return <Link href="/" className="wordmark" aria-label="UNLABEL home">UNLABEL<span>®</span></Link>;
}
