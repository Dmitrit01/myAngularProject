import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { HttpClient } from '@angular/common/http';
import { IBook, IdBook, IResponce } from './interfaces';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  constructor(public storeService: StoreService, public http: HttpClient) {}

  fetchBooksId(id: number): Observable<IdBook> {
    return this.http.get<IdBook>('https://api.itbook.store/1.0/books/' + id);
  }

  fetchBooksFast(titleMovie:string): Observable<IResponce> {
    return this.http
      .get<IResponce>(
        'https://api.itbook.store/1.0/search/' + titleMovie + '/' + this.storeService.page
      )
      .pipe(delay(0));
  }
  fetchBooks(titleMovie:string): Observable<IResponce> {
    this.storeService.page = 1
    return this.http
      .get<IResponce>(
        'https://api.itbook.store/1.0/search/' + titleMovie + '/' + this.storeService.page
      ).pipe(delay(4000));
  }
  clear() {
    this.storeService.books = this.storeService.basket = [];
    this.storeService.overallPrice = 0;
    this,this.storeService.allPages = 1;
    this,this.storeService.page = 1;
  }
  goToPrevPage() {
    if (this.storeService.page > 1) {
      this.storeService.page--;
    }
  }
  goToNextPage() {
    if (this.storeService.page < this.storeService.allPages) {
      this.storeService.page++;
    }
  }
  addDeleteBook(book: IBook, isBasket: boolean) {
    if (!isBasket) {
      this.storeService.basket.push(book);
      let salaryArr = this.storeService.basket.map(
        (item) => +item['price'].slice(1)
      );
      this.storeService.overallPrice = +(salaryArr.reduce((item, acc) => acc + item,0)).toFixed(2);
    } else if (isBasket) {
      this.storeService.basket = this.storeService.basket.filter(
        (item) => item['isbn13'] !== book['isbn13']
      );
      let salaryArr = this.storeService.basket.map(
        (item) => +item['price'].slice(1)
      );
      this.storeService.overallPrice = +(salaryArr.reduce((item, acc) => acc + item,0)).toFixed(2);
    }
  }

  sortIncreasePrice(){
    this.storeService.basket.sort((a,b)=> +(b['price'].slice(1)) - +(a['price'].slice(1)));
  }
  sortDecreasePrice(){
    this.storeService.basket.sort((a,b)=> +(a['price'].slice(1)) - +(b['price'].slice(1)));
  }
   
  filterPrice(from:number,to:number){
    if(from > to){
      [from,to]=[to,from]
      this.storeService.basket = this.storeService.basket.filter(item => +(item['price'].slice(1))>=from && +(item['price'].slice(1))<=to);
      let salaryArr = this.storeService.basket.map(
        (item) => +item['price'].slice(1)
      );
      this.storeService.overallPrice = +(salaryArr.reduce((item, acc) => acc + item,0)).toFixed(2);
    }else{
      this.storeService.basket = this.storeService.basket.filter(item => +(item['price'].slice(1))>=from && +(item['price'].slice(1))<=to);
      let salaryArr = this.storeService.basket.map(
        (item) => +item['price'].slice(1)
      );
      this.storeService.overallPrice = +(salaryArr.reduce((item, acc) => acc + item,0)).toFixed(2);
    }
  }
}
