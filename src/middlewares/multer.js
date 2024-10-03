import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constans/index.js';

const storage = multer.diskStorage({
  destination: TEMP_UPLOAD_DIR,
  filename: (req, file, cb) => {
    const uniquePreffix = Date.now();
    const filename = `${uniquePreffix}_${file.originalname}`;
    cb(null, filename);
  },
});
export const upload = multer({ storage });
