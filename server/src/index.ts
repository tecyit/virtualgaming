import express from 'express';
import path from 'path';

(async () => {
  try {
    const PORT = 4000;

    const app = express();

    const staticFiles = express.static(
      path.join(__dirname, '../../client/build'),
    );

    app.use(staticFiles);

    // tslint:disable-next-line: no-console
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${PORT}`),
    );
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.error('Something went wrong: ', err);
  }
})();
