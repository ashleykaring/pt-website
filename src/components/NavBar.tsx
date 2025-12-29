import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-m font-semibold tracking-wide text-black">
            Peak Performance PT
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="text-black/70 hover:text-black" href="/">
            Services
          </Link>
          <Link className="text-black/70 hover:text-black" href="/">
            Results
          </Link>
          <Link className="text-black/70 hover:text-black" href="/about">
            About Us
          </Link>
          <Link className="text-black/70 hover:text-black" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="rounded-xl px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5"
            href="/contact"
          >
            Book
          </Link>
          <Link
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            href="/contact"
          >
            Free Consult
          </Link>
        </div>
      </div>
    </header>
  );
}
