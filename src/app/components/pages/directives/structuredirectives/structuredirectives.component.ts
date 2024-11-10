import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { IfnotDirective } from '../directives/ifnot.directive';

@Component({
  selector: 'structuredirectives',
  standalone: true,
  imports: [NgIf,IfnotDirective],
  templateUrl: './structuredirectives.component.html',
  styleUrl: './structuredirectives.component.scss'
})
export class StructureDirectivesComponent {
  isVisible = true
  constructor(){

  }
  toggle(){
    this.isVisible = !this.isVisible
  }
}
