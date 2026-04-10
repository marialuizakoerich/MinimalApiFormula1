import { teams } from "../data/teams";

export function getAllTeams () {
    return teams;
}

export function getTeamsById (id:number) {
    return teams.find((team) => team.id === id);
}