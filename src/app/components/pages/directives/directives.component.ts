import { Component, ElementRef } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import { StyleDirective } from './directives/style.directive';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'directives',
  standalone: true,
  imports: [GoBackComponent,StyleDirective,RouterOutlet],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  
  constructor(public router:Router){}
  
  goToPageAttributeDirectives(){
    this.router.navigate(['directives/attributedirectives']);
  }
  goToPageStructureDirectives(){
    this.router.navigate(['directives/structuredirectives']);
  }
}
