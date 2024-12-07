"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className="mb-2 p-2 bg-gray-800 flex flex-col sm:flex-row justify-center">
        <Link
          href="/"
          className="text-white underline mx-4 font-medium hover:text-blue-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white underline mx-4 font-medium hover:text-blue-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-white underline mx-4 font-medium hover:text-blue-200"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
