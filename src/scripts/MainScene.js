import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { BlockGrid } from "./BlockGrid";
export class MainScene {
  constructor() {
    this.container = new PIXI.Container();
    this.createBackground();
    this.createGrid();
  }

  createBackground() {
    this.bg = new PIXI.Sprite(Globals.resources["background"].texture);
    this.bg.width = window.innerWidth;
    this.bg.height = window.innerHeight;
    this.container.addChild(this.bg);
  }
  createGrid() {
    const grid = new BlockGrid();
    this.container.addChild(grid.container)
  }
}
