import { ListOfTitlesParams, SearchParams, TitleParams } from '@utils/types';

export const transformParamsToTitleUrl = (params: TitleParams) => {
  let url = `title?${params.type}=${params.title}`;
  if (params.filter && params.filter.length > 0) {
    url = `${url}&filter=${params.filter.join(',')}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}&remove=${params.remove.join(',')}`;
  }

  return url;
};

export const transformParamsToListOfTitlesUrl = (
  params: ListOfTitlesParams,
) => {
  let listType = '';
  switch (params.type) {
    case 'code':
      listType = 'code_list';
      break;
    case 'id':
      listType = 'id_list';
      break;
    default:
      break;
  }
  let url = `title/list?${listType}=${params.titlesList.join(',')}`;
  if (params.filter && params.filter.length > 0) {
    url = `${url}&filter=${params.filter.join(',')}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}&remove=${params.remove.join(',')}`;
  }
  return url;
};

export const transformParamsToSearchTitleUrl = (params: SearchParams) => {
  let url = `title/search?search=${params.query}`;

  if (params.year) {
    url = `${url}&year=${params.year}`;
  }

  if (params.genres && params.genres.length > 0) {
    url = `${url}&genres=${params.genres.join(',')}`;
  }

  if (params.limit) {
    url = `${url}&limit=${params.limit}`;
  }

  if (params.pagination) {
    url = `${url}&page=${params.pagination.page}&items_per_page=${params.pagination.pageSize}`;
  }

  if (params.filter && params.filter.length > 0) {
    url = `${url}&filter=${params.filter.join(',')}`;
  }

  if (params.remove && params.remove.length > 0) {
    url = `${url}remove=${params.remove.join(',')}`;
  }

  console.log(url)

  return url;
};
