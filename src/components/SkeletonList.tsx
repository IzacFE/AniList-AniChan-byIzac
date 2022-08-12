import { SimpleGrid, Skeleton } from "@mantine/core";

export const SkeletonList = () => {
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
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
        <Skeleton height={280} width={200} />
      </SimpleGrid>
    </>
  );
};
