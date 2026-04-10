import { FastifyReply, FastifyRequest } from "fastify";
import { teams } from "../data/teams";
import { getAllTeams, getTeamsById } from "../services/teams-services";


//listar todos os times
export async function getTeamsController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const teams = getAllTeams ();
  response.type("application/json").code(200).send(teams);
}

//buscar time por id
export async function getTeamByIdController(
  request: FastifyRequest <{Params: {id:string}}>,
  response: FastifyReply,
) {
  const id = parseInt(request.params.id);
  const team = getTeamsById(id);


if (!teams) {
  return response.code(404).send({message: "Team Not Found"});
}
return response.code(200).send({team});

}