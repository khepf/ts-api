"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db/db");
class TeamFilters {
    constructor(data) {
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
        return db_1.pgp.as.format(filterCondition, this);
    }
}
exports.TeamFilters = TeamFilters;
