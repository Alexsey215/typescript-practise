export const getUserData = () => {
  const ls = window.localStorage;
  const userActualData = ls.getItem('user') as unknown;
  return JSON.parse(userActualData as string);
}
export const getFavoritesAmount = () => {
  const ls = window.localStorage;
  return Number(ls.getItem('favoritesAmount')) as unknown;
}
