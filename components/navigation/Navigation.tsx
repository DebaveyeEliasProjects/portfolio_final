import React from "react";
import PageBuilder from "../generic/PageBuilder";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  return (
    <div className="py-8">
      <PageBuilder>
        <div className=" w-full flex justify-between items-center">
          <Logo />
          <NavigationLinks />
        </div>
      </PageBuilder>
    </div>
  );
};

export default Navigation;
