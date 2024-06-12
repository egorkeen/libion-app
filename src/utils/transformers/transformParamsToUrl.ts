import {
  FeedParams,
  ListOfTitlesParams,
  SearchParams,
  TitleParams,
} from "@utils/types";

export const transformParamsToTitleUrl = (params: TitleParams) => {
  let url = `title?${params.type}=${params.title}`;
  if (params.filter && params.filter.length > 0) {
    url = `${url}&filter=${params.filter.join(",")}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}&remove=${params.remove.join(",")}`;
  }

  return url;
};

export const transformParamsToListOfTitlesUrl = (
  params: ListOfTitlesParams,
) => {
  let listType = "";
  switch (params.type) {
    case "code":
      listType = "code_list";
      break;
    case "id":
      listType = "id_list";
      break;
    default:
      break;
  }
  let url = `title/list?${listType}=${params.titlesList.join(",")}`;
  if (params.filter && params.filter.length > 0) {
    url = `${url}&filter=${params.filter.join(",")}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}&remove=${params.remove.join(",")}`;
  }
  return url;
};

export const transformParamsToSearchTitleUrl = (params: SearchParams) => {
  let url = `title/search?search=${params.query}`;

  if (params.year) {
    url = `${url}&year=${params.year}`;
  }

  if (params.genres && params.genres.length > 0) {
    url = `${url}&genres=${params.genres.join(",")}`;
  }

  if (params.limit) {
    url = `${url}&limit=${params.limit}`;
  }

  if (params.pagination) {
    url = `${url}&page=${params.pagination.page}&items_per_page=${params.pagination.pageSize}`;
  }

  if (params.filter && params.filter.length > 0) {
    url = `${url}&filter=${params.filter.join(",")}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}remove=${params.remove.join(",")}`;
  }

  console.log(url);

  return url;
};

export const transformParamsToFeedUrl = (params?: FeedParams) => {
  let url = `feed`;

  if (!params) {
    return url;
  }

  if (params.limit) {
    url = `${url}&limit=${params.limit}`;
  }

  if (params.after) {
    url = `${url}&after=${params.after}`;
  }

  if (params.description_type) {
    url = `${url}&description_type=${params.description_type}`;
  }

  if (params.filter && params.filter.length > 0) {
    url = `${url}&description_type=${params.filter.join(",")}`;
  }

  if (params.include && params.include.length > 0) {
    url = `${url}&description_type=${params.include.join(",")}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}&description_type=${params.remove.join(",")}`;
  }

  if (params.playlist_type) {
    url = `${url}&playlist_type=${params.playlist_type}`;
  }

  return url;
};
