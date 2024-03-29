import IvehicleCar from "./iVehicleCar";

export default class Car implements IvehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }
  startVehicle(): void {
    console.log("Ligando o motor.");
  }

  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Criando um carro: ${color}, ${year}, ${engine} potência, ${doors} portas com ${seats} assentos`
    );
    this.startVehicle();
  }
}
