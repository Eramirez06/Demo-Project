import { dispatchRequest } from './index';

export const requestDataByType = async (genre, type) =>
  dispatchRequest({
    method: 'GET',
    url: `${type}?filter[genres]=${genre}`,
  });

export const requestGenres = async () =>
  dispatchRequest({ method: 'GET', url: 'genres' });

export const filterByType = async (type, query) =>
  dispatchRequest(
    {
      method: 'GET',
      url: `${type}?filter[text]=${query}&page[limit]=10`,
    },
    false,
  );

export const requestMoreData = async (url) =>
  dispatchRequest({ method: 'GET', url: url });
