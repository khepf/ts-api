import * as dbModel from '../../db/model_generated';

export class TeamSummary {
  id: string;
  team_name: string;
  team_number: number;
  team_description: string;
  constructor(data: dbModel.teams) {
    this.id = data.id;
    this.team_name = data.team_name;
    this.team_number = data.team_number;
    this.team_description = data.team_description || '';
  }
}
