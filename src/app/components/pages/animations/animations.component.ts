import { Component } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
 } from '@angular/animations';
import { UpperCasePipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'animations',
  standalone: true,
  imports: [GoBackComponent, UpperCasePipe, NgIf],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue' })),
      state('end', style({ background: 'red', transform: 'scale(1.2)' })),
      state(
        'special',
        style({
          background: 'orange',
          transform: 'scale(0.8)',
          borderRadius: '50%',
        })
      ),
      transition('start<=>end', animate(250)),
      transition('*<=>special',  animate(250)),
      //void=>*
      transition(':enter', animate(600)),
      //*=>void
      transition(':leave', animate(600)),
    ]),
  ],
})

export class AnimationsComponent {
  boxState = 'start';
  isVisible = true;
  constructor() {}
  animate() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
    console.log(this.boxState);
  }
}
