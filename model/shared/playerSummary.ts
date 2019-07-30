import * as dbModel from '../../db/model_generated';

export class PlayerSummary {
  id: string;
  player_first_name: string;
  player_last_name: string;
  player_email: string;
  player_phone: string;
  is_team_owner: boolean;
  constructor(data: dbModel.players) {
    this.id = data.id;
    this.player_first_name = data.player_first_name;
    this.player_last_name = data.player_last_name;
    this.player_email = data.player_email;
    this.player_phone = data.player_phone;
    this.is_team_owner = data.is_team_owner;
  }
}
