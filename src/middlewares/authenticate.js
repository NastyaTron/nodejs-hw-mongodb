import createHttpError from 'http-errors';

import { SessionCollection } from '../db/models/session.js';
import { findUser } from '../services/auth.js';

export const authenticate = async (req, res, next) => {
  const authorization = req.get('Authorization');
  if (!authorization) {
    return next(createHttpError(401, 'Please provide Authorization header'));
  }
  const bearer = authorization.split(' ')[0];
  const token = authorization.split(' ')[1];

  if (bearer !== 'Bearer' || !token) {
    return next(createHttpError(401, 'Auth header should be of type Bearer'));
  }
  const session = await SessionCollection.findOne({ accessToken: token });
  if (!session) {
    return next(createHttpError(401, 'Session not found'));
  }
  if (new Date() > session.accessTokenValidUntil) {
    return next(createHttpError(401, 'Access token expired'));
  }
  const user = await findUser({ _id: session.userId });
  if (!user) {
    return next(createHttpError(401, 'User not found'));
  }
  req.user = user;
  next();
};
