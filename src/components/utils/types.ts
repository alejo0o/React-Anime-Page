type Url = string;

type CoverImage = {
  small: Url;
  original: Url;
  large: Url;
  tiny: Url;
};

type Attributes = {
  coverImage: CoverImage;
  showType: string;
  episodeCount: number;
  canonicalTitle: string;
  startDate: string;
  ageRatingGuide: string;
  status: string;
  synopsis: string;
  youtubeVideoId: string;
};

type Anime = {
  id: number;
  attributes: Attributes;
  links: {};
  relationships: {};
  type: string;
};

type ID = {
  id: string;
};

type Params = {
  params: ID;
};

export type InformationArray = {
  animeList: Anime[];
};

export type CardInformation = {
  anime: Attributes;
  cardWidth: string;
};

export type ModalTypes = {
  isOpen: boolean;

  onClose: () => void;
};

export type ReactErrorBoundary = {
  error: Error;
  resetErrorBoundary: () => void;
};

export type PaginationTypes = {
  itemsNumber: number;
  setpage: (pageNumber: number) => void;
};

export type MatchParams = {
  match: Params;
};
