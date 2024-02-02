import { Component, OnDestroy, OnInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-canvas-base',
  templateUrl: './canvas-base.component.html',
})
export abstract class CanvasBaseComponent implements OnInit, OnDestroy {
  private p5: any;
  constructor() {}

  abstract drawing: (p: any) => void;

  public ngOnInit() {
    this.createCanvas();
  }

  public ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  };

  private destroyCanvas = () => {
    this.p5!.noCanvas();
  };
}
