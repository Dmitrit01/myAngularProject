import { Component, Input, OnInit } from '@angular/core';
import { CompanyStoreService } from '../../../../../services/company/company-store.service';
import {
  specialist,
  task,
} from '../../../../../services/company/company-interfaces';
import { NgClass } from '@angular/common';
@Component({
  selector: 'task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() task: task;
  specialist: specialist;
  constructor(public companyStoreService: CompanyStoreService) {}
  ngOnInit(): void {
    this.specialist = this.companyStoreService.listSpecialists.find(
      (item) => +item['id'] === +this.task['id']
    );
    console.log(this.companyStoreService.startArrayTasks);
  }
  removeTask() {
    if (this.task['state'] === 'start') {
      this.companyStoreService.startArrayTasks =
        this.companyStoreService.startArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    }else if(this.task['state'] === 'progress'){
      this.companyStoreService.progressArrayTasks =
        this.companyStoreService.progressArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    }else if(this.task['state'] === 'test'){
      this.companyStoreService.testArrayTasks =
        this.companyStoreService.testArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    }else if(this.task['state'] === 'ready'){
      this.companyStoreService.readyArrayTasks =
        this.companyStoreService.readyArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    }
  }
  goToPrevColumn() {
    if (this.task['state'] === 'ready') {
      this.companyStoreService.testArrayTasks.push(this.task);
      this.task['state'] = 'test';
      this.companyStoreService.readyArrayTasks =
        this.companyStoreService.readyArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    } else if (this.task['state'] === 'test') {
      this.companyStoreService.progressArrayTasks.push(this.task);
      this.task['state'] = 'progress';
      this.companyStoreService.testArrayTasks =
        this.companyStoreService.testArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    } else if (this.task['state'] === 'progress') {
      this.companyStoreService.startArrayTasks.push(this.task);
      this.task['state'] = 'start';
      this.companyStoreService.progressArrayTasks =
        this.companyStoreService.progressArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    }
  }
  goToNextColumn() {
    if (this.task['state'] === 'start') {
      console.log('state');
      this.companyStoreService.progressArrayTasks.push(this.task);
      this.task['state'] = 'progress';
      this.companyStoreService.startArrayTasks =
        this.companyStoreService.startArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    } else if (this.task['state'] === 'progress') {
      this.companyStoreService.testArrayTasks.push(this.task);
      this.task['state'] = 'test';
      this.companyStoreService.progressArrayTasks =
        this.companyStoreService.progressArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    } else if (this.task['state'] === 'test') {
      this.companyStoreService.readyArrayTasks.push(this.task);
      this.task['state'] = 'ready';
      this.companyStoreService.testArrayTasks =
        this.companyStoreService.testArrayTasks.filter(
          (item) => !(+item['numId'] === +this.task['numId'])
        );
    }
  }
}
