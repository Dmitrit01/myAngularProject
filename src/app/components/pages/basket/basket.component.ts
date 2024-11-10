import { Component, Input } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import { StoreService } from '../../../services/store.service';
import { CardComponent } from '../goods/card/card.component';
import { NgFor, NgIf } from '@angular/common';
import { IBook } from '../../../services/interfaces';
import { FormsModule } from '@angular/forms';
import { ActionsService } from '../../../services/actions.service';

@Component({
  selector: 'basket',
  standalone: true,
  imports: [GoBackComponent, CardComponent, NgFor, NgIf, FormsModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  fromPrice: number | null;
  toPrice: number | null;
  @Input() book: IBook;
  constructor(
    public storeService: StoreService,
    public actionsService: ActionsService
  ) {}
  numberValidation(event: { keyCode: number }) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8) {
      return true;
    } else {
      return false;
    }
  }
  sortIncreasePrice(){
    this.actionsService.sortIncreasePrice();
  }
  sortDecreasePrice(){
    this.actionsService.sortDecreasePrice();
  }
  filterPrice() {
    if (this.fromPrice && this.toPrice) {
      this.actionsService.filterPrice(this.fromPrice, this.toPrice);
      this.fromPrice = null;
      this.toPrice = null;
    }
  }
  clear(){
    this.actionsService.clear();
  }
}
