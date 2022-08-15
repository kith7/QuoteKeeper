import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.name}>{props.children}</main>
    </>
  );
};

export default Layout;
