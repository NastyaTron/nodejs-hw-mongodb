import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs/promises';

import { env } from '../utils/env.js';
import { CLOUDINARY } from '../constans/index.js';

const cloud_name = env(CLOUDINARY.CLOUD_NAME);
const api_key = env(CLOUDINARY.API_KEY);
const api_secret = env(CLOUDINARY.API_SECRET);

cloudinary.config({ cloud_name, api_key, api_secret });

export const saveFileCloudinary = async (file) => {
  const response = await cloudinary.uploader.upload(file.path, {
    folder: 'contact',
  });
  await fs.unlink(file.path);
  return response.secure_url;
};
