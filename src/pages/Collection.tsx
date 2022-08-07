import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  progressBar: {
    "&:not(:first-of-type)": {
      borderLeft: `3px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));

const dummy = [
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
  {
    name: "judul collection",
    list: [
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
      "kun",
      "chan",
    ],
  },
];

// interface TableReviewsProps
//   data: {
//     title: string;
//     author: string;
//     year: number;
//     reviews: { positive: number; negative: number };
//   }[];
//

// export const Collection = ({ data }: TableReviewsProps) =>
export const Collection = () => {
  const { classes, theme } = useStyles();

  const rows = dummy.map((data) => {
    return (
      <tr key={data.name}>
        <td>
          <Anchor<"a"> size="sm" onClick={(event) => event.preventDefault()}>
            <p>{data.name}</p>
            <Link to={`/collection-detail/${data.name}`}>
              <Button
                variant="gradient"
                gradient={{ from: "teal", to: "lime", deg: 105 }}
              >
                Detail
              </Button>
            </Link>
          </Anchor>
        </td>
        <td>Ini Description</td>

        <td>
          {data.list.map((anime: string) => {
            return (
              <p>
                <Anchor<"a">
                  size="sm"
                  onClick={(event) => event.preventDefault()}
                >
                  {anime}
                </Anchor>
              </p>
            );
          })}
        </td>
        <td>{data.list.length}</td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table
        sx={{ width: "100%", maxWidth: 1200 }}
        verticalSpacing="xs"
        horizontalSpacing="md"
      >
        <thead>
          <tr>
            <th>Collection Title</th>
            <th>Description</th>
            <th>Anime List</th>
            <th>Total Anime</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
