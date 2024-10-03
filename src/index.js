import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constans/index.js';
import { createDirNotToExists } from './utils/createDirNotExists.js';

const bootstrap = async () => {
  initMongoConnection();
  setupServer();
  await createDirNotToExists(TEMP_UPLOAD_DIR);
  await createDirNotToExists(UPLOAD_DIR);
};
bootstrap();
