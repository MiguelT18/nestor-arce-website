import Link from "next/link";
import React from "react";

export function ButtonAnchor({ children, target }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-125 hover:rotate-12 transition-all"
      href={target}
    >
      {children}
    </a>
  );
}

export function ButtonLink({ children, target }) {
  return (
    <Link
      className="text-sm w-fit bg-white hover:bg-gray-300 hover:scale-105 uppercase font-bold transition-all rounded-md text-black px-4 py-2"
      href={target}
    >
      {children}
    </Link>
  );
}
