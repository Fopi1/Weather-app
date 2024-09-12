import { FC } from "react";
import classes from "./Navbar.module.scss";
import { generateAltText } from "/src/functions/generateAltText";

interface NavbarProps {
  leftIcon: {
    icon: string;
    onClick?: () => void;
  };
  rightIcon?: {
    icon: string;
    onClick: () => void;
  };
  pageTitle?: string;
}

const Navbar: FC<NavbarProps> = ({ leftIcon, pageTitle, rightIcon }) => {
  console.log(leftIcon);

  return (
    <nav className={classes.navbar}>
      <div className={classes.leftPartNavbar}>
        <img
          src={leftIcon.icon}
          alt={generateAltText(leftIcon.icon)}
          className={classes.navbarIcon}
          onClick={leftIcon.onClick}
        />
        {pageTitle && <span className={classes.pageTitle}>{pageTitle}</span>}
      </div>
      {rightIcon && (
        <img
          src={rightIcon.icon}
          alt={generateAltText(rightIcon.icon)}
          className={classes.navbarIcon}
          onClick={rightIcon.onClick}
        />
      )}
    </nav>
  );
};

export default Navbar;
