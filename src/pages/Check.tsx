import React from "react";
import { AddAnimeCollection } from "../components/database/AddAnimeCollection";
import { Reset } from "../components/database/Reset";

export const Check = () => {
  return (
    <div>
      <AddAnimeCollection />
      <Reset />
    </div>
  );
};
