import { parseIsFavourite } from './parsedIsFavourite.js';
import { parseContactType } from './parsedContactType.js';

export const parseContactFilterParams = (query) => {
  const { isFavourite, type } = query;
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedIsContactType = parseContactType(type);
  const filter = {};

  if (parsedIsFavourite !== undefined) {
    filter.isFavourite = parsedIsFavourite;
  }

  if (parsedIsContactType !== undefined) {
    filter.contactType = parsedIsContactType;
  }

  return filter;
};
