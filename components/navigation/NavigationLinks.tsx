import React from "react";
import Link from "next/link";

const NavigationLinks = () => {
  return (
    <div className="hidden md:flex gap-20">
      <Link href="/">
        <a>Me</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

export default NavigationLinks;
