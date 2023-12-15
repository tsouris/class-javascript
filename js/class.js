class Car {
  static description = "Class, that describes a car";
  constructor({ brand, model, price } = {}) {
    this._brand = brand;
    this._model = model;
    this._price = price;
  }

  get brand() {
    return this._brand;
  }
  set brand(newBrand) {
    this._brand = newBrand;
  }

  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
}

const carInstance = new Car({
  brand: "Audi",
  model: "08",
  price: 45000,
});

console.log(carInstance);
console.log(carInstance._price);
carInstance._price = 33000;
console.log(carInstance._price);
