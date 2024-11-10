import { Injectable, OnInit } from "@angular/core";
import { IBook } from "./interfaces";

@Injectable({
    providedIn:'root'
})
export class StoreService implements OnInit{
    titleMovie: string = '';
    basket: IBook[] = [];
    books: IBook[] = [];
    page: number = 1;
    allPages:number = 1;
    overallPrice:number = 0
    constructor(){}
    ngOnInit() {
    }
}