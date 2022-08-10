import { IconDatabase } from "@tabler/icons";
import { resetDatabase } from "../../models/db";

export function Reset() {
  return (
    <button
      className="large-button"
      onClick={() => {
        resetDatabase();
      }}
    >
      <IconDatabase /> Reset Database
    </button>
  );
}
