import React, { useState } from "react";
import PageBuilder from "../generic/PageBuilder";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-8 static">
      <PageBuilder>
        <div className=" w-full flex justify-between items-center">
          <Logo />
          <NavigationLinks />
          <MobileMenuButton
            onPress={(menuState: boolean) => {
              setMenuOpen(menuState);
            }}
          />
        </div>
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => {
            setMenuOpen(false);
          }}
        />
      </PageBuilder>
    </div>
  );
};

export default Navigation;
