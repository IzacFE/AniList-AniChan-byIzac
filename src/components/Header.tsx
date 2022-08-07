import React, { useState } from "react";
import {
  createStyles,
  Header as HeaderContainer,
  Container,
  Group,
  Burger,
  Drawer,
} from "@mantine/core";
import { Link } from "react-router-dom";

const HEADER_HEIGHT: number = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },

  dropdown: {
    width: "50%",
    height: "100vh",
    position: "absolute",
    top: HEADER_HEIGHT,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  logo: {
    fontWeight: 600,
  },

  link: {
    display: "block",
    lineHeight: 1,
    textDecoration: "none",
    padding: theme.spacing.md,
    color: "red",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

export const Header: React.FC = () => {
  const [opened, toggleOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <HeaderContainer height={HEADER_HEIGHT} mb={0} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.logo}>
          <a href="/">Ani-ChanPedia</a>
        </Group>

        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened(!opened)}
            // className={classes.burger}
            size="sm"
          />
        </Group>

        <Drawer
          opened={opened}
          onClose={() => toggleOpened(false)}
          title="Ani-ChanPedia"
          padding="xl"
          // size="m"
          withinPortal={true}
          overlayOpacity={0.5}
          overlayBlur={0.1}
          transitionDuration={350}
          transitionTimingFunction="ease"
          withCloseButton={true}
        >
          <div>
            <Link
              id="header-homepage"
              to="/"
              onClick={() => toggleOpened(!opened)}
            >
              Animes List
            </Link>
          </div>
          <div>
            <Link
              id="header-collection"
              to="/collection"
              onClick={() => toggleOpened(!opened)}
            >
              Anime Collections
            </Link>
          </div>
        </Drawer>
      </Container>
    </HeaderContainer>
  );
};
