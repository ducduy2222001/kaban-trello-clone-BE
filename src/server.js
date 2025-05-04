/* eslint-disable no-console */
import express from 'express';
import { CONNECT_DB, GET_DB } from '~/config/mongodb';

const START_SERVER = async () => {
  const app = express();

  const hostname = 'localhost';
  const port = 8017;

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>');
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello, I am running at ${hostname}:${port}/`);
  });
};

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB'))
  .then(() => START_SERVER())
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
    process.exit(0)
  });
