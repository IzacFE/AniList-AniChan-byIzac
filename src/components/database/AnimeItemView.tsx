import { db } from "../../models/db";
import { AnimeItem } from "../../models/AnimeItem";
import { IconTrash } from "@tabler/icons";
import { Button } from "@mantine/core";

interface Props {
  item: AnimeItem;
}

export function AnimeItemView({ item }: Props) {
  return (
    <div className={"row "}>
      <div className="narrow"></div>

      <div className="todo-item-text">{item.title}</div>
      <div className="todo-item-trash">
        <Button>
          <IconTrash
            onClick={() => {
              db.animeItems.delete(item.id!);
            }}
          />
        </Button>
      </div>
    </div>
  );
}
