import React from "react";

const PageBuilder = (props) => {
  return (
    <div className=" w-11/12 sm:w-4/5 lg:w-3/5 m-auto ">{props.children}</div>
  );
};

export default PageBuilder;
