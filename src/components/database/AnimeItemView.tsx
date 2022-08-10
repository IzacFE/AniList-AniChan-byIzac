import { db } from "../../models/db";
import { AnimeItem } from "../../models/AnimeItem";
import { IconTrash } from "@tabler/icons";

interface Props {
  item: AnimeItem;
}

export function AnimeItemView({ item }: Props) {
  return (
    <div className={"row " + (item.done ? "done" : "")}>
      <div className="narrow">
        <input
          type="checkbox"
          checked={!!item.done}
          onChange={(ev) =>
            db.animeItems.update(item, {
              done: ev.target.checked,
            })
          }
        />
      </div>

      <div className="todo-item-text">{item.title}</div>
      <div className="todo-item-trash">
        <a
          onClick={() => db.animeItems.delete(item.id!)}
          title="Delete item"
        ></a>
        <IconTrash />
      </div>
    </div>
  );
}
