import React from "react";
import { AddAnimeCollection } from "../components/database/AddAnimeCollection";
import { AnimeCollections } from "../components/database/AnimeCollections";
import { Reset } from "../components/database/Reset";

export const Check = () => {
  return (
    <div>
      {/* <AnimeCollections /> */}
      <AddAnimeCollection />
      <Reset />
    </div>
  );
};
