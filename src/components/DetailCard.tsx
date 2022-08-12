import React from "react";
import { IconStar } from "@tabler/icons";
import { Paper, Text, Textarea, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,

      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.lg,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },

    ratingContainer: {
      display: "flex",
      gap: theme.spacing.xs,
      marginBottom: theme.spacing.md,
    },
  };
});
interface CardData {
  id: number;
  title: string;
  image: string;
  rating: number;
  description: string;
  children: JSX.Element;
}

export const DetailCard = ({
  id,
  image,
  title,
  rating,
  description,
  children,
}: CardData) => {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className={classes.form}>
          <Text size="lg" weight={700} className={classes.title}>
            {title}
          </Text>
          <div className={classes.ratingContainer}>
            <IconStar />
            <p>{rating}</p>
          </div>

          <div
            className={classes.fields}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div>{children}</div>
        </div>
      </div>
    </Paper>
  );
};
