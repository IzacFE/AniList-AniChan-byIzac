import Dexie, { Table } from "dexie";
// import { populate } from "./populate";
import { AnimeCollection } from "./AnimeCollection";
import { AnimeItem } from "./AnimeItem";

export class AnimeDB extends Dexie {
  animeCollections!: Table<AnimeCollection, number>;
  animeItems!: Table<AnimeItem, number>;
  constructor() {
    super("AnimeDB");
    this.version(1).stores({
      animeCollections: "++id",
      animeItems: "++id, animeCollectionId",
    });
  }

  deleteList(animeCollectionId: number) {
    return this.transaction(
      "rw",
      this.animeItems,
      this.animeCollections,
      () => {
        this.animeItems.where({ animeCollectionId }).delete();
        this.animeCollections.delete(animeCollectionId);
      }
    );
  }
}

export const db = new AnimeDB();

// db.on("populate", populate);

export function resetDatabase() {
  return db.transaction("rw", db.animeCollections, db.animeItems, async () => {
    await Promise.all(db.tables.map((table) => table.clear()));
    // await populate();
  });
}
