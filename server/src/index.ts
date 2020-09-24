import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import env from './env';
import Response from './middleware/response.middleware';

(async () => {
  try {
    const PORT = 4000;

    const app = express();

    const staticFiles = express.static(
      path.join(__dirname, '../../client/build'),
    );

    app.use(staticFiles);

    app.use('/*', staticFiles);

    app.listen(process.env.PORT, () =>
      // tslint:disable-next-line: no-console
      console.log(`Server running on port ${PORT}`),
    );
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.error('Something went wrong: ', err);
  }
})();
