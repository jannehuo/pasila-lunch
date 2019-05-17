import "../scss/main";
import data from "../data/restaurants";
import spinner from "./templates/spinner";
import restaurants from "./templates/restaurants";
import { compileTempate } from "./utils";
import { sample, shuffle } from "lodash";
const root = document.getElementById("root");

class Spinner {
  constructor(data, root) {
    this.data = shuffle(data);
    this.winner = sample(this.data);
    this.winnderIndex = this.data.indexOf(this.winner);
    this.root = root;
    this.rotation = 360 / this.data.length;
    this.items = null;
    this.init();
  }

  init() {
    this.root.innerHTML = compileTempate(spinner, this.data);
    this.items = document.querySelectorAll(".spinner-item");
    this.spinner = document.querySelector(".spinner");
    this.spinnerItems = document.querySelector(".spinner-items");
    this.items.forEach((item, i) => {
      const itemRotation = i * this.rotation;
      item.style.transform = `rotate(${itemRotation}deg)`;
    });
    this.spinner.addEventListener("click", this.spin.bind(this), false);
  }

  spin(e) {
    console.log(this.winnderIndex);
    const rotations = 20 * 360;
    const toWinner = this.rotation * this.winnderIndex;
    const val = (rotations + toWinner) * -1;
    this.spinnerItems.style.transform = `rotate(${val}deg)`;
    setTimeout(() => {
      this.showWinner();
    }, 11000);
  }

  showWinner() {
    this.items[this.winnderIndex].classList.add("spinner-item--winner");
  }
}

new Spinner(data, root);
