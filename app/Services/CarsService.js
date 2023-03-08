import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { saveState } from "../Utils/Store.js";

// Created one function to handle saving cars as changes occur, or could just add the saveState line in each function where you want to save changes
function _saveCars() {
  saveState('cars', appState.cars)
}

class CarsService {
  createCar(formData) {
    let newCar = new Car(formData)
    console.log(newCar)
    appState.cars = [...appState.cars, newCar]
    // NOTE get rid of emits once ready to change to saving to localstorage
    // appState.emit('cars')
    _saveCars()
  }

  deleteCar(id) {
    let car = appState.cars.find(c => c.id == id)
    console.log(car)
    let filtered = appState.cars.filter(c => c.id != id)
    console.log(filtered)
    appState.cars = filtered
    // appState.emit('cars')
    _saveCars()
  }
}

export const carsService = new CarsService();