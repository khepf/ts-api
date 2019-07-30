"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamSummary {
    constructor(data) {
        this.id = data.id;
        this.team_name = data.team_name;
        this.team_number = data.team_number;
        this.team_description = data.team_description || '';
    }
}
exports.TeamSummary = TeamSummary;
