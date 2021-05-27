import React, { FC, useState } from "react";
import { icons } from "../icons/icons";

interface props {
  onPress: any;
}

const MobileMenuButton: FC<props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="md:hidden text-gray-600"
      onClick={() => {
        let open = isOpen;
        setIsOpen(!open);
        document.querySelector("body").style.overflow = "hidden";
        props.onPress(!open);
      }}
    >
      {icons.menu}
    </div>
  );
};

export default MobileMenuButton;
