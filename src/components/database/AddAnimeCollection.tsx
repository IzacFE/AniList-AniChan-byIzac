import { useState } from "react";
import { db } from "../../models/db";
import { useLiveQuery } from "dexie-react-hooks";
import { IconCheck } from "@tabler/icons";

export function AddAnimeCollection() {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const hasAnyList = useLiveQuery(async () => {
    const listCount = await db.animeCollections.count();
    return listCount > 0;
  });

  return !isActive ? (
    <button className="large-button" onClick={() => setIsActive(!isActive)}>
      <IconCheck />{" "}
      {hasAnyList ? `Add another Collection` : `Create Anime Collection`}
    </button>
  ) : (
    <div className="box">
      <h2>Give your list a name:</h2>
      <div className="todo-item-input">
        <input
          type="text"
          autoFocus
          placeholder="Name of list..."
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          onKeyUp={(ev) => {
            if (ev.key === "Enter") {
              db.animeCollections.add({ title });
              setTitle("");
              setIsActive(false);
            }
          }}
        />
      </div>
    </div>
  );
}
