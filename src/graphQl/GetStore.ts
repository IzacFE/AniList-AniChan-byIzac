export const LIST_ITEM = `
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      mediaList {
        media {
          title {
            english
            native
          }
          coverImage{
            large
          }
          averageScore
          id
        }
      }
      pageInfo {
        total
      }
    }
  }
`;

export const ITEM_DETAIL = `
query ($id: Int) { 
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
        large
      }
      bannerImage
      averageScore
  }
}
`;
