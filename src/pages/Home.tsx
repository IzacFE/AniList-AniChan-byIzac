import React from "react";
import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { AnimeCard } from "../components/AnimeCard";
import { PagePagination } from "../components/Pagination";

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
}));

const mockdata = {
  supTitle: "Ini main title",
  description: "ini main description",
  data: [
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
    { id: 1, title: "Ini Judul", image: "ini gambar", rating: 4.5 },
  ],
};

export const Home = () => {
  const { classes } = useStyles();

  const cards = mockdata.data.map((item, index) => {
    return (
      <AnimeCard
        id={index}
        title={item.title}
        image={item.image}
        rating={item.rating}
      />
    );
  });

  return (
    <Container size={1200} className={classes.wrapper}>
      <Text className={classes.supTitle}>{mockdata.supTitle}</Text>

      <Title className={classes.title} order={2}>
        PharmLand is <span className={classes.highlight}>not</span> just for
        pharmacists
      </Title>

      <Container size={1200} p={0}>
        <Text color="dimmed" className={classes.description}>
          {mockdata.description}
        </Text>
      </Container>

      <SimpleGrid
        cols={5}
        spacing="lg"
        breakpoints={[
          { maxWidth: 1000, cols: 4, spacing: "md" },
          { maxWidth: 800, cols: 3, spacing: "sm" },
          { maxWidth: 500, cols: 2, spacing: "xs" },
        ]}
        style={{ marginTop: 30 }}
      >
        {cards}
      </SimpleGrid>
      <PagePagination />
    </Container>
  );
};
