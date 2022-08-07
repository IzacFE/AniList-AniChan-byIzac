import { createStyles } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

const useStyles = createStyles((theme) => ({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },
}));

export const Layout: React.FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <div className={classes.pageContainer}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
