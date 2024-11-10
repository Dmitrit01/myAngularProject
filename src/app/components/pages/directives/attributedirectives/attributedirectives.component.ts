import { Component } from '@angular/core';
import { StyleDirective } from '../directives/style.directive';

@Component({
  selector: 'attributedirectives',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './attributedirectives.component.html',
  styleUrl: './attributedirectives.component.scss'
})
export class AttributeDirectivesComponent {
  
}
