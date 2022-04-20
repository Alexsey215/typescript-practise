export interface RectangularField {
    rectangularArea: number | string;
}
export interface Rectangular {
    rectangularWidth: number;
    rectangularHeight: number;
    topLeftBorder: number;
    rightBottomBorder: number;
}
export interface Circle {
    circleCenter: number;
    circleRadios: number;
}
export declare abstract class MyGraphicsPrimitive2D implements RectangularField {
    rectangularArea: number;
    protected shift: number;
    protected constructor(shift?: number);
    protected movePrimitive(): void;
}
export declare abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D implements Rectangular {
    protected primitiveArea: number;
    rectangularWidth: number;
    rectangularHeight: number;
    topLeftBorder: number;
    rightBottomBorder: number;
    protected constructor(rectangularWidth?: number, rectangularHeight?: number, topLeftBorder?: number, rightBottomBorder?: number);
    getPrimitiveArea(): void;
}
export declare class MyCircle extends MyAreaPrimitive2D implements Circle {
    circleCenter: number;
    circleRadios: number;
    constructor(circleCenter: number, circleRadios: number);
    getCircle(): void;
}
export declare class MyRectangle extends MyAreaPrimitive2D {
    constructor(rectangularWidth: number, rectangularHeight: number, topLeftBorder: number, rightBottomBorder: number);
    getRectangle(): void;
}
