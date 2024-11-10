import { Component, Input, OnInit } from '@angular/core';
import { CompanyStoreService } from '../../../../../services/company/company-store.service';
import { Specialist } from '../../../specialist/specialist.component';

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  @Input()task:any
  specialist:any
  constructor(public companyStoreService:CompanyStoreService){

  }
  ngOnInit(): void {
   console.log(this.task);
   this.specialist = this.companyStoreService.listSpecialists.find(item=>+item['id'] === +this.task['id']);
   console.log('ftt',this.specialist);
  }
}
