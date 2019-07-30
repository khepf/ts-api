import { Router } from 'express';
import { jsonParser } from '../general/bodyParser';
import { apiCheckTeamFilters } from './apiCheckTeamFilters';
import { apiGetTeams } from './apiGetTeams';
import { apiCreateTeam } from './apiCreateTeam';
import { apiDeleteTeam } from './apiDeleteTeam';
import { apiUpdateTeam } from './apiUpdateTeam';

export let teamsRouter = Router();

teamsRouter.get('/', apiCheckTeamFilters, apiGetTeams);

teamsRouter.post('/', jsonParser, apiCreateTeam);

teamsRouter.delete('/:id', apiDeleteTeam);

teamsRouter.patch('/:id', jsonParser, apiUpdateTeam);
