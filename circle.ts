
import {shape} from "./shape";

export class circle implements shape{
    name : string ;
    radius : number;
    area : number;

    constructor (radius : number){
        this.name = 'Circle',
        this.radius = radius
        this.area = this.CalculateArea();
    }
        CalculateArea(): number {
         return Math.PI * this.radius *this.radius;
        }
    }


