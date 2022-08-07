import {
  Container,
  Grid,
  Pagination,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PRIMARY_COL_HEIGHT = 600;

export const Detail: React.FC = () => {
  const params = useParams();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          Halooo
        </div>

        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
            HALOOO
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
            HALOOO
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
            HALOOO
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
