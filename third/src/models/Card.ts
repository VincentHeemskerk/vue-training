import { ICard } from "../interfaces/ICard";

export class Card implements ICard {
    public r;
    public g;
    public b;
    public a;

    constructor(r: number, g: number, b: number, a:number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}