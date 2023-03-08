import { generateId } from "../Utils/generateId.js"

export class Car {
  constructor(data) {
    this.id = generateId()
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.color = data.color
    this.description = data.description
    this.img = data.img
    this.price = data.price
  }

  get CarTemplate() {
    return `
    <div class="col-6 col-md-3 m-2">
    <div class="card p-2 elevation-5 rounded">
      <img
        src="${this.img}"
        class="img-fluid">
      <h5>${this.make} | ${this.model} | ${this.year}</h5>
      <div class="">${this.color}</div>
      <div>$${this.price}</div>
      <p>${this.description}</p>
      <button onclick="app.carsController.deleteCar('${this.id}')" class="btn btn-danger" title="Delete Car"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }
}