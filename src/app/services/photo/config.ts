export interface QueryParams {
  method: string;
  api_key: string;
  format: string;
  per_page: string;
  text: string;
  nojsoncallback: string;
  page: string;
  tags?: string;
}

export const photoRequestConfig = {
  baseUrl: 'https://www.flickr.com/services/rest',
  queryParams: {
    method: 'flickr.photos.search',
    api_key: '10ffc02e6e80e3d9fc21bc8454590e15',
    format: 'json',
    per_page: '12',
    nojsoncallback: '1',
    page: '0',
  },
};
