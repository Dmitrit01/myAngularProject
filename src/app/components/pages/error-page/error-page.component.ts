import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
  constructor(public router:Router){

  }
  goToHomePage(){
    this.router.navigate(['/'])
  }
}
