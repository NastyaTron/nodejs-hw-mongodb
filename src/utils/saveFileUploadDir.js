import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constans/index.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { env } from './env.js';

export const saveFileToUploadDir = async (file) => {
  const oldPath = path.join(TEMP_UPLOAD_DIR, file.filename);
  const newPath = path.join(UPLOAD_DIR, file.filename);
  await fs.rename(oldPath, newPath);
  return `${env('APP_DOMAIN')}/uploads/${file.filename}`;
};
