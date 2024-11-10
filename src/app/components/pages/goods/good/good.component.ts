import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from '../../../../services/actions.service';
import { GoBackComponent } from '../../../go-back/go-back.component';

@Component({
  selector: 'good',
  standalone: true,
  imports: [GoBackComponent],
  templateUrl: './good.component.html',
  styleUrl: './good.component.scss',
})
export class GoodComponent {
  image: string;
  authors:string;
  descr:string;
  language:string;
  pages:string;
  price:string;
  publisher:string;
  rating: string;
  subtitle:string;
  title:string;
  url:string;
  year:string;

  constructor(
    public route: ActivatedRoute,
    public actionService: ActionsService
  ) {
    this.route.params.subscribe((item) => {
      console.log(item['id']);
      this.actionService.fetchBooksId(item['id']).subscribe((item) => {
        console.log('id',item);
        this.image = item['image'];
        this.authors = item['authors'];
        this.descr = item['desc'];
        this.language = item['language'];
        this.pages = item['pages'];
        this.price = item['price'];
        this.publisher = item['publisher'];
        this.rating = item['rating'];
        this.subtitle = item['subtitle'];
        this.title = item['title'];
        this.url = item['url'];
        this.year = item['year'];
      });
    });
  }
}
