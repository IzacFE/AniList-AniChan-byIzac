import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { AnimeCollection } from "../../models/AnimeCollection";
import { db } from "../../models/db";
import { AnimeItemView } from "./AnimeItemView";
import { AddAnimeItem } from "./AddAnimeItem";
import { IconTrash } from "@tabler/icons";

interface Props {
  animeCollection: AnimeCollection;
}

export function AnimeCollectionView({ animeCollection }: Props) {
  const items = useLiveQuery(
    () =>
      db.animeItems.where({ animeCollectionId: animeCollection.id }).toArray(),
    [animeCollection.id]
  );

  if (!items) return null;

  return (
    <div className="box">
      <div className="grid-row">
        <h2>{animeCollection.title}</h2>
        <div className="todo-list-trash">
          <a
            onClick={() => db.deleteList(animeCollection.id!)}
            title="Delete list"
          >
            <IconTrash />
          </a>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <AnimeItemView key={item.id} item={item} />
        ))}
      </div>
      <div>
        <AddAnimeItem animeCollection={animeCollection} />
      </div>
    </div>
  );
}
