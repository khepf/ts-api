"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerSummary {
    constructor(data) {
        this.id = data.id;
        this.player_first_name = data.player_first_name;
        this.player_last_name = data.player_last_name;
        this.player_email = data.player_email;
        this.player_phone = data.player_phone;
        this.is_team_owner = data.is_team_owner;
    }
}
exports.PlayerSummary = PlayerSummary;
