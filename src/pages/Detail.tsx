import { gql, useQuery } from "@apollo/client";
import { Container, useMantineTheme, Modal, Button } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoLists } from "../components/database/AnimeCollections";
import { DetailCard } from "../components/DetailCard";
import { ErrorResult } from "../components/ErrorResult";
import { LoadSpin } from "../components/LoadSpin";
import { ITEM_DETAIL } from "../graphQl/GetStore";

const PRIMARY_COL_HEIGHT = 600;

export const Detail: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { id } = useParams();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  //   for modal content
  const [openTooltip, setOpenTooltip] = useState(false);
  const [value, setValue] = useState("");
  const valid = value.trim().length >= 6;

  const GET_DETAIL = gql`
    ${ITEM_DETAIL}
  `;

  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id: id },
  });

  let getValue;

  if (loading) return <LoadSpin />;
  if (error) return <ErrorResult />;
  if (!loading) getValue = data.Media;
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={`Add "${
          getValue.title.english
            ? getValue.title.english
            : getValue.title.native
        }" to your collection!!`}
        centered
        overlayBlur={1}
      >
        <TodoLists />
      </Modal>
      <Container my="md">
        <DetailCard
          id={getValue.id}
          title={
            getValue.title.english
              ? getValue.title.english
              : getValue.title.native
          }
          image={getValue.coverImage.large}
          rating={getValue.averageScore / 20}
          description={getValue.description}
        >
          <div>
            <Button onClick={() => setOpened(true)}>Add to Collection</Button>
          </div>
        </DetailCard>
      </Container>
    </>
  );
};
