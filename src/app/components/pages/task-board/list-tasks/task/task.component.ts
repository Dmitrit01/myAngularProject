import { Component, Input, OnInit } from '@angular/core';
import { CompanyStoreService } from '../../../../../services/company/company-store.service';
import { Specialist } from '../../../specialist/specialist.component';
import { specialist, task } from '../../../../../services/company/company-interfaces';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  @Input()task:task;
  specialist:specialist;
  constructor(public companyStoreService:CompanyStoreService){}
  ngOnInit(): void {
    this.specialist = this.companyStoreService.listSpecialists.find(item=>+item['id'] === +this.task['id']);
    console.log(this.companyStoreService.startArrayTasks);
  }
  removeTask(){
    this.companyStoreService.startArrayTasks = this.companyStoreService.startArrayTasks.filter(item=>!(+item['numId'] === +this.task['numId']))
  }
}
