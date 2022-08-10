import * as React from "react";
import { useState } from "react";
import { db } from "../../models/db";
import { AnimeCollection } from "../../models/AnimeCollection";

interface Props {
  animeCollection: AnimeCollection;
}

export function AddAnimeItem({ animeCollection }: Props) {
  const [item, setItem] = useState({
    animeCollectionId: animeCollection.id!,
    title: "",
  });

  return (
    <div className="row add-item">
      <div className="narrow">
        <input type="checkbox" disabled />
      </div>
      <div className="todo-item-input">
        <input
          type="text"
          placeholder="Add todo item..."
          value={item.title}
          onChange={(ev) =>
            setItem((item) => ({
              ...item,
              title: ev.target.value,
            }))
          }
          onKeyUp={(ev) => {
            if (ev.key === "Enter") {
              db.animeItems.add(item);
              setItem({
                animeCollectionId: animeCollection.id!,
                title: "",
              });
            }
          }}
        />
      </div>
    </div>
  );
}
