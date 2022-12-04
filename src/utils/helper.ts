export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function getFullImageUrl(imgId?: number) {
  return `https://acdn.fl2.org/upload/hotelimages/${imgId}/main.jpg`;
}
