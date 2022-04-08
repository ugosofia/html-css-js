import { SimpleMath, Square, Rectangle, Triangle } from './type1';
import { FIGUREGEOMETRICHE } from './type';

class main {
    
    square = new Square(2);
    rectangle = new Rectangle(2, 9);
    triangle = new Triangle(3, 3);
    
    sm = new SimpleMath();

    public printSquare():void {
        console.log("Area quadrato: " + this.sm.calcoloArea(this.square, FIGUREGEOMETRICHE.QUADRATO));
    }

    public printRectangle():void {
        console.log("Area rettangolo: " + this.sm.calcoloArea(this.rectangle, FIGUREGEOMETRICHE.RETTANGOLO));
    }

    public printTriangle():void {
        console.log("Area triangolo: " + this.sm.calcoloArea(this.triangle, FIGUREGEOMETRICHE.TRIANGOLO));
    }
}