import { FastifyReply, FastifyRequest } from "fastify";
import { teams } from "../data/teams";

export async function getTeams(
  request: FastifyRequest,
  response: FastifyReply,
) {
  response.type("application/json").code(200);

  return teams;
}
