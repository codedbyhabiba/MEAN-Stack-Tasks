export class Rectangle {
    width: number;
    height: number;
 constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference(): number {
        return 2 * (this.width + this.height);
    }
}