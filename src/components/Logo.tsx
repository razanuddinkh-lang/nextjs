import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="FitLog Logo"
        width={42}
        height={42}
        className="h-10 w-10 object-contain"
      />

      <span className="text-lg font-black text-white">
        FITLOG
      </span>
    </Link>
  );
}