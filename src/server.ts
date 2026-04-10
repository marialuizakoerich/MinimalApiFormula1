import fastify from "fastify";
import {
  getTeamByIdController,
  getTeamsController,
} from "./controllers/teams-controller";
import {
  getDriverByIdController,
  getDriversController,
} from "./controllers/drivers-controller";
import chalk from "chalk";
import { getTeamsById } from "./services/teams-services";

const server = fastify({ logger: true });

server.get("/teams", getTeamsController);
server.get("/teams/:id", getTeamByIdController);
server.get("/drivers", getDriversController);
server.get("/drivers/:id", getDriverByIdController);

server.listen({ port: 3333 }, () => {
  console.log(chalk.green.bold("SERVER INIT 🚀🚀"));
});
