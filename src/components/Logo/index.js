import Link from "next/link";
import Img from "@/asssets/img/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <Img width="40" height="40" />
    </Link>
  );
}
