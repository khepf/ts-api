import { pgp } from '../../db/db';

export class TeamFilters {
  readonly team_name: string;
  readonly team_number: number;
  readonly team_description: string;
  constructor(data: any) {
    this.team_name = data.team_name;
    this.team_number = data.team_number;
    this.team_description = data.team_description;
  }

  getCondition() {
    const filterCondition = [
      this.team_name ? 'team_name = ${team_name}' : 'true',
      this.team_number ? 'team_number = ${team_number}' : 'true',
      this.team_description ? 'team_description = ${team_description}' : 'true'
    ].join(' AND ');

    return pgp.as.format(filterCondition, this);
  }
}
