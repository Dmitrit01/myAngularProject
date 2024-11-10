import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../../../services/interfaces';
import { RouterLink } from '@angular/router';
import { ActionsService } from '../../../../services/actions.service';
import { NgIf,NgClass } from '@angular/common';
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'card',
  standalone: true,
  imports: [RouterLink,NgIf,NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit{
  isBasket: boolean = false;
  @Input('book') book: IBook;
  constructor(public actionsService: ActionsService,public storeService:StoreService) {}
  ngOnInit() {
    this.isBasket = this.storeService.basket.includes(this.book);
  }
  addDeleteBook() {
    if (!this.isBasket) {
      this.actionsService.addDeleteBook(this.book,this.isBasket);
      this.isBasket = true;
    }else{
      this.actionsService.addDeleteBook(this.book,this.isBasket);
      this.isBasket = false;
    }
  }
}
