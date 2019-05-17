import "../scss/main"
import data from "../data/restaurants"
import spinner from "./templates/spinner.js"
import { compileTempate } from "./utils"
const root = document.getElementById("root")

class Spinner {
  constructor(data, root) {
    this.data = data
    this.root = root
    this.rotation = 360 / this.data.length
    this.items = null
    this.init()
  }

  init() {
    this.root.innerHTML = compileTempate(spinner, this.data)
    this.items = document.querySelectorAll(".spinner-item")
    this.items.forEach((item, i) => {
      const itemRotation = i * this.rotation
      item.style.transform = `rotate(${itemRotation}deg)`
    })
  }
}

new Spinner(data, root)
