import {
  Text,
  Container,
  Title,
  SimpleGrid,
  createStyles,
  Pagination,
  Center,
} from "@mantine/core";
import { AnimeCard } from "../components/AnimeCard";
import { gql, useQuery } from "@apollo/client";
import { LIST_ITEM } from "../graphQl/GetStore";
import { SkeletonList } from "../components/SkeletonList";
import { ErrorResult } from "../components/ErrorResult";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },

  pagination: {
    marginTop: 30,
  },
}));

interface ItemList {
  media: {
    id: number;
    title: { english: string; native: string };
    coverImage: { large: string };
    averageScore: number;
  };
}

export const Home = () => {
  const { classes } = useStyles();
  const [activePage, setPage] = useState(1);

  const GET_LIST = gql`
    ${LIST_ITEM}
  `;

  const { loading, error, data } = useQuery(GET_LIST, {
    variables: { page: activePage, perPage: 10 },
  });

  console.log(data);

  const items = () => {
    if (loading) return <SkeletonList />;
    if (error) return <ErrorResult />;
    return (
      <>
        <SimpleGrid
          cols={5}
          spacing="lg"
          breakpoints={[
            { maxWidth: 1000, cols: 4, spacing: "md" },
            { maxWidth: 800, cols: 3, spacing: "sm" },
            { maxWidth: 550, cols: 2, spacing: "xs" },
          ]}
          style={{ marginTop: 30 }}
        >
          {data.Page.mediaList.map((item: ItemList) => {
            return (
              <>
                <AnimeCard
                  id={item.media.id}
                  title={
                    item.media.title.english
                      ? item.media.title.english
                      : item.media.title.native
                  }
                  image={item.media.coverImage.large}
                  rating={item.media.averageScore / 20}
                />
              </>
            );
          })}
        </SimpleGrid>
        <Center className={classes.pagination}>
          <Pagination
            page={activePage}
            onChange={setPage}
            total={data.Page.pageInfo.total}
          />
        </Center>
      </>
    );
  };

  return (
    <Container size={1200} className={classes.wrapper}>
      <Text className={classes.supTitle}>Ini Sup Title</Text>

      <Title className={classes.title} order={2}>
        PharmLand is <span className={classes.highlight}>not</span> just for
        pharmacists
      </Title>

      <Container size={1200} p={0}>
        <Text color="dimmed" className={classes.description}>
          Ini Description
        </Text>
      </Container>

      {items()}
    </Container>
  );
};
