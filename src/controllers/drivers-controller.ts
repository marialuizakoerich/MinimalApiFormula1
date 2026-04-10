import { FastifyReply, FastifyRequest } from "fastify";
import { getAllDrivers, getDriverById } from "../services/drivers-services";


//listar todos
export async function getDriversController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const drivers = getAllDrivers();
  response.type("application/json").code(200).send(drivers);
}

//buscar por id
export async function getDriverByIdController(
  request: FastifyRequest<{Params: {id:string}}>,
  response: FastifyReply,
) {
  const id = parseInt(request.params.id);
  const driver = getDriverById(id);

  if (!driver) {
    return response.code(404).send({ message: "Driver Not Found" });
  }

  return response.code(200).send({ driver });
}