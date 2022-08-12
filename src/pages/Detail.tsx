import { gql, useQuery } from "@apollo/client";
import { Container, useMantineTheme, Modal, Button } from "@mantine/core";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddAnimeCollection } from "../components/database/AddAnimeCollection";
import { AddAnimeItem } from "../components/database/AddAnimeItem";
import { AnimeCollections } from "../components/database/AnimeCollections";
import { AnimeCollectionView } from "../components/database/AnimeCollectionView";
import { DetailCard } from "../components/DetailCard";
import { ErrorResult } from "../components/ErrorResult";
import { LoadSpin } from "../components/LoadSpin";
import { ITEM_DETAIL } from "../graphQl/GetStore";
import { AnimeCollection } from "../models/AnimeCollection";
import { db } from "../models/db";

const PRIMARY_COL_HEIGHT = 600;

interface Props {
  animeCollection: AnimeCollection;
}

export const Detail: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { id } = useParams();
  const theme = useMantineTheme();
  const lists = useLiveQuery(() => db.animeCollections.toArray());
  //   for modal content
  const [value, setValue] = useState("");

  const GET_DETAIL = gql`
    ${ITEM_DETAIL}
  `;

  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id: id },
  });

  let getValue;
  let theTitle: string;

  if (loading) return <LoadSpin />;
  if (error) return <ErrorResult />;
  if (!loading) {
    getValue = data.Media;
    theTitle = getValue.title.english
      ? getValue.title.english
      : getValue.title.native;
  }
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
        {lists && (
          <div>
            {lists.map((list) => (
              <>
                <div>
                  <h2>{list.title}</h2>
                  <AddAnimeItem animeCollection={list} animeTitle={theTitle} />
                </div>
              </>
            ))}
          </div>
        )}
        <AddAnimeCollection />
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
