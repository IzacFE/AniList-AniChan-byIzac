import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Image,
  Button,
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";

const data = [
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
  {
    id: 2,
    avatar: "string",
    name: "string",
    job: "string",
    email: "string",
    phone: "string",
  },
];

const jobColors: Record<string, string> = {
  engineer: "blue",
  manager: "cyan",
  designer: "pink",
};

export const CollectionDetail = () => {
  const collectionName = useParams();
  const theme = useMantineTheme();
  console.log(collectionName);

  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          {/* <Avatar size={30} src={item.avatar} radius={30} /> */}
          <Image
            radius="md"
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            width={120}
            height={120}
            alt="Random unsplash image"
          />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item.job.toLowerCase()]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {item.job}
        </Badge>
      </td>
      <td>
        <Anchor<"a">
          size="sm"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          {item.email}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.phone}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <Link to={`/detail/${item.id}`}>
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Detail
            </Button>
          </Link>
          <ActionIcon>
            <IconPencil size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size={25} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Email</th>
            <th>Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
