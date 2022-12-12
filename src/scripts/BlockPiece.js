import * as PIXI from "pixi.js"
import { Globals } from "./Globals";
export class BlockPiece {
  constructor(id, field) {
    this.sprite = new PIXI.Sprite(Globals.resources["block"].texture);
    this.sprite.x = field.x
    this.sprite.y = field.y
    this.sprite.anchor.set(0.5)
  }
}