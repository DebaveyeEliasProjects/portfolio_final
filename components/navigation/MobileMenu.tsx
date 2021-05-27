import Link from "next/link";
import React, { FC } from "react";
import PageBuilder from "../generic/PageBuilder";
import { icons } from "../icons/icons";
import Logo from "./Logo";

interface props {
  isOpen: boolean;
  onClose: any;
}

const MobileMenu: FC<props> = (props) => {
  return (
    <div
      className={` absolute bg-gray-50 shadow-lg top-0 w-full h-full py-8 transition-all z-50 duration-250 ease-in-out border-b-10 border-purple-600 ${
        props.isOpen ? "right-0" : "right-full"
      }`}
    >
      <PageBuilder>
        <div className=" flex justify-between items-center w-full">
          <Logo />
          <div
            className="text-gray-600"
            onClick={() => {
              document.querySelector("body").style.overflow = "auto";
              props.onClose();
            }}
          >
            {icons.close}
          </div>
        </div>
        <div className="flex flex-col mt-6 space-y-5 text-lg text-gray-600 ml-4">
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
      </PageBuilder>
    </div>
  );
};

export default MobileMenu;
