import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { CompanyStoreService } from '../../../../services/company/company-store.service';
import { CompanyActionsService } from '../../../../services/company/company-actions.service';

@Component({
  selector: 'list-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss',
})
export class ListTasksComponent {
  constructor(
    public companyStoreService: CompanyStoreService,
    public companyActionsService: CompanyActionsService
  ) {}
}
