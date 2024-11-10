import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoBackComponent } from '../../go-back/go-back.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [GoBackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public router:Router){

  }
  goToGoodsPage(){
    this.router.navigate(['/goods'])
  }
  goToBasketPage(){
    this.router.navigate(['/basket'])
  }
  goToDirectivesPage(){
    this.router.navigate(['/directives'])
  }
  goToAnimationsPage(){
    this.router.navigate(['/animations'])
  }
  goToFormPage(){
    this.router.navigate(['/form'])
  }
  goToSpecialist(){
    this.router.navigate(['/specialist'])
  }
  goToTaskBoardPage(){
    this.router.navigate(['/taskboard'])
  }
}
