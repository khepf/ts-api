import { Router } from 'express';
import { jsonParser } from '../general/bodyParser';
import { apiCheckPlayerFilters } from './apiCheckPlayerFilters';
import { apiGetPlayers } from './apiGetPlayers';
import { apiCreatePlayer } from './apiCreatePlayer';
import { apiDeletePlayer } from './apiDeletePlayer';
import { apiUpdatePlayer } from './apiUpdatePlayer';

export let playersRouter = Router();

playersRouter.get('/', apiCheckPlayerFilters, apiGetPlayers);

playersRouter.post('/', jsonParser, apiCreatePlayer);

playersRouter.delete('/:id', apiDeletePlayer);

playersRouter.patch('/:id', jsonParser, apiUpdatePlayer);
