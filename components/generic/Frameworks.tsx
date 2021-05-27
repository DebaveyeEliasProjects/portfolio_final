import React from "react";
import { icons } from "../icons/icons";
import PageBuilder from "./PageBuilder";

const Frameworks = () => {
  return (
    <div className="bg-gray-50 text-gray-300">
      <PageBuilder>
        <div className="pt-16 pb-16 flex flex-wrap sm:flex-nowrap gap-16 justify-center sm:justify-between">
          {icons.react}
          {icons.typescript}
          {icons.dotnet}
          {icons.sass}
          {icons.mysql}
        </div>
      </PageBuilder>
    </div>
  );
};

export default Frameworks;
