"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "How it works" },
  { href: "/beta", label: "Join beta" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="hf-header">
      <Link href="/" className="hf-header-logo" aria-label="HF Daily home">
        <Image
          src="/hf-daily-banner-logo.png"
          alt="HF Daily"
          width={918}
          height={175}
          priority
          className="hf-header-logo-image"
        />
      </Link>

      <nav className="hf-header-nav">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`hf-header-link${isActive ? " hf-header-link-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
