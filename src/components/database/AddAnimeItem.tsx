import * as React from "react";
import { useState } from "react";
import { db } from "../../models/db";
import { AnimeCollection } from "../../models/AnimeCollection";
import { Button } from "@mantine/core";

interface Props {
  animeCollection: AnimeCollection;
  animeTitle: string;
}

export function AddAnimeItem({ animeCollection }: Props) {
  const [item, setItem] = useState({
    animeCollectionId: animeCollection.id!,
    title: "Ini Title",
    animeId: 1,
    image: "iniImage",
  });

  return (
    <div className="row add-item">
      <div className="todo-item-input">
        <Button
          onClick={() => {
            setItem((item) => ({
              ...item,
              title: "Ini Title",
            }));
            db.animeItems.add(item);
          }}
        >
          Add Anime to Collection
        </Button>
      </div>
    </div>
  );
}
