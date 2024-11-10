import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'go-back',
  standalone: true,
  imports: [],
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.scss'
})
export class GoBackComponent {
  constructor(public location:Location){

  }
  goBack(){
    this.location.back()
  }
}
