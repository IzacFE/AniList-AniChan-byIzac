import React from "react";
import { AddTodoList } from "../components/database/AddCollection";
import { TodoLists } from "../components/database/AnimeCollections";
import { Reset } from "../components/database/Reset";

export const Check = () => {
  return (
    <div>
      <TodoLists />
      <AddTodoList />
      <Reset />
    </div>
  );
};
