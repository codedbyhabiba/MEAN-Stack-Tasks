export class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference() {
        return 2 * (this.width + this.height);
    }
}
