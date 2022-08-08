import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  Modal,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Tooltip,
  Center,
  Text,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PRIMARY_COL_HEIGHT = 600;

export const Detail: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const params = useParams();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  //   for modal content
  const [openTooltip, setOpenTooltip] = useState(false);
  const [value, setValue] = useState("");
  const valid = value.trim().length >= 6;

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        centered
        overlayBlur={1}
      >
        <Tooltip
          label={
            valid ? "All good!" : "Password must include at least 6 characters"
          }
          position="bottom-start"
          withArrow
          opened={openTooltip}
          color={valid ? "teal" : undefined}
        >
          <PasswordInput
            label="Tooltip shown onFocus"
            required
            placeholder="Your password"
            onFocus={() => setOpenTooltip(true)}
            onBlur={() => setOpenTooltip(false)}
            mt="md"
            value={value}
            onChange={(event: any) => setValue(event.currentTarget.value)}
          />
        </Tooltip>
      </Modal>
      <Container my="md">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div>
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
            <Group position="center">
              <Button onClick={() => setOpened(true)}>Open Modal</Button>
            </Group>
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
    </>
  );
};
