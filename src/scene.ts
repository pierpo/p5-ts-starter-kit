import * as p5 from 'p5';

export class Scene {
  public draw(p: p5): void {
    p.colorMode(p.HSB);
    p.stroke(225, 200, 100);
    p.fill(225, 200, 30);
    p.circle(0, 0, 50);
  }
}
