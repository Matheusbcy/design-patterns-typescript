import IvehicleMotorcycle from "./iVehicleMotorcycle";

export default class Motorcyle implements IvehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }
  startVehicle(): void {
    console.log("Ligando o motor.");
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas`);
    this.startVehicle();
  }
}
