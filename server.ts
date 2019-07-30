require('dotenv').config();
import express from 'express';
import path from 'path';

import { apiErrorHandler } from './api/v1/general/errorHandling';
import { apiDownloadImage } from './api/v1/tours/apiDownloadImage';

import { userRouter } from './api/v1/users/apiUsers';
import { toursRouter } from './api/v1/tours/apiTours';
import { teamsRouter } from './api/v1/teams/apiTeams';
import { playersRouter } from './api/v1/players/apiPlayers';

import { apiCors } from './api/v1/general/cors';
import { logger } from './api/v1/general/logging';
import { apiValidation } from './api/v1/general/validation';

const app = express();

app.use(logger);
app.use(apiCors);
app.use(apiValidation);

app.use('/static', express.static(path.resolve('./', 'public', 'img')));

app.get('/headers', (req, res, next) => {
  res.json(req.headers);
});

app.get('/', (req, res, next) => {
  res.send('Tour booking API');
});

app.use('/users', userRouter);
app.use('/tours', toursRouter);
app.use('/teams', teamsRouter);
app.use('/players', playersRouter);

app.get('/static/download/:id', apiDownloadImage);

app.use(apiErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
