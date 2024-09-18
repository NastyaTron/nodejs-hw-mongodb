export const parseIsFavourite = (value) => {
  if (typeof value !== 'string') return undefined;
  return value.toLowerCase() === 'true';
};
