import { Component } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [GoBackComponent,RouterOutlet],
  templateUrl: './specialist.component.html',
  styleUrl: './specialist.component.scss'
})
export class Specialist {
  constructor(public router:Router){
    
  }
  goToAddSpecialistPage(){
    this.router.navigate(['/specialist/addspecialist'])
  }

  goToListSpecialistPage(){
    this.router.navigate(['/specialist/listspecialist'])
  }
}
