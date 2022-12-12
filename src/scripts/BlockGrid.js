import * as PIXI from "pixi.js"
import { BlockGridConfig } from "./BlockGridConfig";
import { BlockPiece } from "./BlockPiece";
export class BlockGrid {
  constructor() {
    this.container = new PIXI.Container();
    this.container.x = window.innerWidth / 2
    this.container.y = window.innerHeight / 2
    this.createBlock();
  }
  createBlock() {
    this.pieces = []
    BlockGridConfig.forEach(field => {
      const piece = new BlockPiece(field.id, field);
      this.container.addChild(piece.sprite)
      this.pieces.push(piece);
    })
  }
}