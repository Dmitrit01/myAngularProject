import { Component } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import {Router,RouterOutlet} from '@angular/router';

@Component({
  selector: 'task-board',
  standalone: true,
  imports: [GoBackComponent,RouterOutlet],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss'
})
export class TaskBoardComponent {
  constructor(public Router:Router){

  }
  goToAddTask(){
    this.Router.navigate(['/taskboard/addtask']);
  }
  goToListTasks(){
    this.Router.navigate(['/taskboard/listtasks']);
  }
}
