import { appState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
  const cars = appState.cars
  let template = ''
  cars.forEach(c => template += c.CarTemplate)
  setHTML('listings', template)
}

export class CarsController {
  constructor() {
    // console.log('hello from controller', appState.cars)
    appState.on('cars', _drawCars)
    _drawCars()
  }

  createCar() {
    window.event.preventDefault()
    console.log('creating a car')
    let form = window.event.target
    console.log(form)
    // console.log(form.make.value)
    let formData = getFormData(form)
    // console.log(formData)
    carsService.createCar(formData)
    form.reset()
  }

  async deleteCar(id) {
    if (await Pop.confirm('Are you sure you want to delete this?')) {
      console.log('deleting car', id)
      carsService.deleteCar(id)
      Pop.toast('Car successfully deleted!', "success", "center")
    }
  }
}