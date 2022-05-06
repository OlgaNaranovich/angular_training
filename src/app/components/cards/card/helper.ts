export const getPhotoUrl = (
  server: string,
  id: string,
  secret: string,
  size = 'w'
) => {
  return `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
};
