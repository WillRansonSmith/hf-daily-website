import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
        <Link href="/about" className="hf-header-link">
          How it Works
        </Link>
        <Link href="/beta" className="hf-header-link">
          Join Beta
        </Link>
      </nav>
    </header>
  );
}
