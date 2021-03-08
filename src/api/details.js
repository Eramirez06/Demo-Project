import { dispatchRequest } from './index';

export const requestByGenres = async (type, id) =>
  dispatchRequest({ method: 'GET', url: `${type}/${id}/genres` });
