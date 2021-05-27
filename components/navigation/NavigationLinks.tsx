import React, { useState } from "react";
import Link from "next/link";

const NavigationLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hidden font-sans font-semibold md:flex gap-16 text-gray-600 ">
        <Link href="/">
          <a className="hover:text-purple-800">Me</a>
        </Link>
        <Link href="/projects">
          <a className="hover:text-purple-800">Projects</a>
        </Link>
        <Link href="/contact">
          <a className="hover:text-purple-800">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default NavigationLinks;
