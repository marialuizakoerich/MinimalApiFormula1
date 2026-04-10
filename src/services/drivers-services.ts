import { Driver, drivers } from "../data/drivers";

export function getAllDrivers () {
    return drivers;
}

export function getDriverById(id: number) {
  return drivers.find((driver) => driver.id === id);
}

