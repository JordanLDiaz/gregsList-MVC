import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'Toyota', model: 'Tacoma', year: 2025, color: '#000', description: 'Yo', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 10000 }),
    new Car({ make: 'Subaru', model: 'Tsunami', year: 2025, color: '#000', description: 'Its cool', img: 'https://images.unsplash.com/photo-1616804087673-cdcd32e5578f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ViYXJ1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 30000 })
  ]

  // Once we're ready to save data to local storage, change fake car data above to loadstate below
  // cars = loadState('cars', [Car])
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
