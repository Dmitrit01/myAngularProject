import { Component, OnInit } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { NgClass, NgFor } from '@angular/common';
import { StoreService } from '../../../services/store.service';
import { ActionsService } from '../../../services/actions.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'goods',
  standalone: true,
  imports: [GoBackComponent, CardComponent, NgFor, NgClass, NgIf, FormsModule],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
})
export class GoodsComponent implements OnInit {
  
  isLoading: boolean = false;
  isDisabledBtn: boolean;
  constructor(
    public http: HttpClient,
    public storeService: StoreService,
    public actionsService: ActionsService
  ) {}

  ngOnInit() {}

  loadGoods() {
    if (this.storeService.titleMovie.trim()) {
      this.storeService.books = [];
      this.isLoading = true;
      this.actionsService.fetchBooks(this.storeService.titleMovie).subscribe((response) => {
        this.storeService.books = response['books'];
        this.isLoading = false;
        this.storeService.allPages = Math.ceil(+response['total'] / 10);
      });
    }
  }
  goToPrevPage() {
    this.actionsService.goToPrevPage();
    this.actionsService
      .fetchBooksFast(this.storeService.titleMovie)
      .subscribe((response) => {
        this.storeService.books = response['books'];
      });
  }
  goToNextPage() {
    this.actionsService.goToNextPage();
    this.actionsService
      .fetchBooksFast(this.storeService.titleMovie)
      .subscribe((response) => {
        this.storeService.books = response['books'];
      });
  }
  clear() {
    this.actionsService.clear();
  }
}
