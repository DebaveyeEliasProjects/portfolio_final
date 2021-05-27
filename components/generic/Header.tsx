import Link from "next/link";
import React from "react";
import PageBuilder from "./PageBuilder";

const Header = () => {
  return (
    <div className="h-110 w-screen overflow-hidden relative ">
      <div className="bg-purple-600 w-110 h-110 lg:w-120 lg:h-120 -bottom-64 sm:-bottom-80 rounded-full absolute -right-96 sm:-right-80 "></div>

      <div className="sticky z-20 ">
        <PageBuilder>
          <h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 mt-24">
            Elias
          </h1>
          <h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 ">
            Debaveye
          </h1>
          <h2 className="max-w-xs mt-8 text-lg text-gray-600 mb-8">
            A student full stack developer with a passion for webdesign
          </h2>
          <Link href="/contact">
            <a className="text-white font-bold hover:bg-purple-500 bg-purple-600 py-1 px-6 rounded">
              Contact
            </a>
          </Link>
        </PageBuilder>
      </div>
    </div>
  );
};

export default Header;
