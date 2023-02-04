import { gql } from "@apollo/client";

const GET_ARTISTS = gql`
  query MyQuery {
    artists {
      image {
        url
      }
      name
      slug
      id
    }
  }
`;

const GET_LIMIT_MUSIC = gql`
  query {
    musics(first: 6) {
      id
      name
      slug
      coverPhoto {
        url
      }
      artist {
        name
        slug
      }
    }
  }
`;

const GET_ALL_MISICS = gql`
  query {
    musics(first: 50) {
      id
      name
      slug
      coverPhoto {
        url
      }
      file {
        url
      }
      artist {
        slug
        name
      }
    }
  }
`;

const GET_ARTIST = gql`
  query getArtist($slug: String!) {
    artist(where: { slug: $slug }) {
      name
      image {
        url
      }
      musics {
        name
        id
        slug
        coverPhoto {
          url
        }
      }
      description {
        html
      }
    }
  }
`;

const GET_MUSIC_DATA = gql`
  query getMusicData($slug: String!) {
    music(where: { slug: $slug }) {
      name
      id
      coverPhoto {
        url
      }
      lyrics {
        html
      }
      artist {
        name
        slug
        musics {
          name
          id
          slug
          file {
            url
          }
          coverPhoto {
            url
          }
          artist {
            name
            slug
          }
        }
      }
    }
  }
`;

export {
  GET_ARTISTS,
  GET_LIMIT_MUSIC,
  GET_ALL_MISICS,
  GET_ARTIST,
  GET_MUSIC_DATA,
};
