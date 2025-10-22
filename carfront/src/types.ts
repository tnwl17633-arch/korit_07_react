export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href: string;
    }, 
    car: {
      href: string;
    },
    owner: {
      href: string; 
    }
  }
}

export type Car = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
}

export type CarEntity = {
  car: Car;
  url: string;
}
