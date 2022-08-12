import { createStyles, LoadingOverlay } from "@mantine/core";
import React from "react";

const useStyles = createStyles(() => ({
  spinnerScreen: {
    height: "100vh",
    width: "100%",
    display: "grid",
    placeItems: "center",
  },

  text: {
    marginTop: "1.3rem",
    fontSize: "1.3rem",
    fontWeight: 500,
    textAlign: "center",
  },

  spinner: {
    width: "90px",
    height: "90px",
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    borderBottomColor: "transparent",
    animation: "spin 1s linear infinite",
    border: "4px solid green",
  },
}));

export const LoadSpin = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.spinnerScreen}>
      <LoadingOverlay visible={true} overlayBlur={2}>
        <h1 className={classes.text}>Loading...</h1>
      </LoadingOverlay>
    </div>
  );
};
