import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hf-footer">
      <div className="hf-footer-inner">
        <Link href="/support" className="hf-footer-link">
          Support
        </Link>
        <Link href="/privacy" className="hf-footer-link">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hf-footer-link">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}
