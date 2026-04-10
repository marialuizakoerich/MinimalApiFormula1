import fastify from "fastify";
import cors from "@fastify/cors";
import {
  getTeamByIdController,
  getTeamsController,
} from "./controllers/teams-controller";
import {
  getDriverByIdController,
  getDriversController,
} from "./controllers/drivers-controller";
import chalk from "chalk";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*"
})

server.get("/teams", getTeamsController);
server.get("/teams/:id", getTeamByIdController);
server.get("/drivers", getDriversController);
server.get("/drivers/:id", getDriverByIdController);

server.listen({ port: 3333 }, () => {
  console.log(chalk.green.bold("SERVER INIT 🚀🚀"));
});
