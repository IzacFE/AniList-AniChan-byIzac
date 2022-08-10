import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../models/db";
import { AnimeCollectionView } from "./AnimeCollectionView";

export function AnimeCollections() {
  const lists = useLiveQuery(() => db.animeCollections.toArray());

  if (!lists) return null;

  return (
    <div>
      {lists.map((list) => (
        <AnimeCollectionView key={list.id} animeCollection={list} />
      ))}
    </div>
  );
}
