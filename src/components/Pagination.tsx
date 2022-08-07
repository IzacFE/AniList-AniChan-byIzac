import { useState } from "react";
import { Pagination } from "@mantine/core";

export const PagePagination = () => {
  const [activePage, setPage] = useState(1);

  return <Pagination page={activePage} onChange={setPage} total={10} />;
};
