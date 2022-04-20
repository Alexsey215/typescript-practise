export interface RectangularField {
  rectangularArea: number | string
}
export interface Rectangular {
  rectangularWidth: number,
  rectangularHeight: number,
  topLeftBorder: number,
  rightBottomBorder: number
}
export interface Circle {
  circleCenter: number,
  circleRadios: number,
}

export abstract class MyGraphicsPrimitive2D implements RectangularField {
  public rectangularArea: number
  protected shift: number
  protected constructor(shift?: number) {
    this.shift = shift;
  }
  protected movePrimitive(): void {
    console.log(`item shifted by ${this.shift} units`)
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D implements Rectangular {
  protected primitiveArea: number
  public rectangularWidth: number
  public rectangularHeight: number
  public topLeftBorder: number
  public rightBottomBorder: number

  protected constructor(
    rectangularWidth?: number,
    rectangularHeight?: number,
    topLeftBorder?: number,
    rightBottomBorder?: number
  ) {
    super();
    this.rectangularWidth = rectangularWidth;
    this.rectangularHeight = rectangularHeight;
    this.topLeftBorder = topLeftBorder;
    this.rightBottomBorder = rightBottomBorder;
    this.primitiveArea = this.rectangularWidth * this.rectangularHeight;
  }
  getPrimitiveArea(): void{
    console.log(`the area of the rectangle is ${this.primitiveArea}`)
  }
}

export class MyCircle extends MyAreaPrimitive2D implements Circle {
  circleCenter: number
  circleRadios: number

  constructor(
    circleCenter: number,
    circleRadios: number
  ) {
    super();
    this.circleCenter = circleCenter;
    this.circleRadios = circleRadios;
  }
  getCircle(): void{
    console.log(`Circle radios: ${this.circleRadios} \nCircle center: ${this.circleCenter} \n `)
  }
}
export class MyRectangle extends MyAreaPrimitive2D {
  constructor(rectangularWidth: number, rectangularHeight: number, topLeftBorder: number, rightBottomBorder: number) {
    super(rectangularWidth, rectangularHeight, topLeftBorder, rightBottomBorder);
  }
  getRectangle(): void {
    console.log(`rectangle characteristics: ${this.rectangularWidth}, ${this.rectangularHeight}, ${this.topLeftBorder}, ${this.rightBottomBorder}`)
  }
}


const circleCenter: number = 10;
const circleRadios: number = 5;

const circle = new MyCircle(circleCenter, circleRadios)
const rectangle = new MyRectangle(5, 5, 5, 5);

rectangle.getRectangle()
circle.getCircle()
rectangle.getPrimitiveArea()

