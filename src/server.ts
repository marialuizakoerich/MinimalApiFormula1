import fastify from "fastify";
import { getTeams } from "./controllers/teams-controller";
import {
  getDriverByIdController,
  getDriversController,
} from "./controllers/drivers-controller";
import chalk from "chalk";

const server = fastify({ logger: true });

server.get("/teams", getTeams);
server.get("/drivers", getDriversController);
server.get("/drivers/:id", getDriverByIdController);

server.listen({ port: 3333 }, () => {
  console.log(chalk.green.bold("SERVER INIT 🚀🚀"));
});
