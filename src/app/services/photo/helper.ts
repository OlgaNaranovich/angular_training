import { stringify } from 'qs';
import { photoRequestConfig, QueryParams } from './config';

export const searchPhotosUrl = (query: QueryParams) =>
  `${photoRequestConfig.baseUrl}?${stringify(query)}`;
