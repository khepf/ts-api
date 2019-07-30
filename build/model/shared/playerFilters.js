"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db/db");
class PlayerFilters {
    constructor(data) {
        this.player_first_name = data.player_first_name;
        this.player_last_name = data.player_last_name;
        this.player_email = data.player_email;
        this.player_phone = data.player_phone;
        this.is_team_owner = data.is_team_owner;
    }
    getCondition() {
        const filterCondition = [
            this.player_first_name
                ? 'player_first_name = ${player_first_name}'
                : 'true',
            this.player_last_name ? 'player_last_name = ${player_last_name}' : 'true',
            this.player_email ? 'player_email = ${player_email}' : 'true',
            this.player_phone ? 'player_phone = ${player_phone}' : 'true',
            this.is_team_owner ? 'is_team_owner = ${is_team_owner}' : 'true'
        ].join(' AND ');
        return db_1.pgp.as.format(filterCondition, this);
    }
}
exports.PlayerFilters = PlayerFilters;
