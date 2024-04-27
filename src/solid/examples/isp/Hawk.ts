import IAve from "./IAve";

class Hawk implements IAve {
  constructor() {}
  name!: string;
  color!: string;
  age!: number;

  eat(): void {
    throw new Error("Method not implemented.");
  }
  sleep(): void {
    throw new Error("Method not implemented.");
  }
  play(): void {
    throw new Error("Method not implemented.");
  }
  fly(): void {
    throw new Error("Method not implemented.");
  }
}

export default Hawk;
