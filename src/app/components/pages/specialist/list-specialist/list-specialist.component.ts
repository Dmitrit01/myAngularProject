import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { CompanyStoreService } from '../../../../services/company/company-store.service';
import { CompanyActionsService } from '../../../../services/company/company-actions.service';
import { specialist } from '../../../../services/company/company-interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list-specialist',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, FormsModule],
  templateUrl: './list-specialist.component.html',
  styleUrl: './list-specialist.component.scss',
})
export class ListSpecialistComponent implements OnInit {
  srcMan: string = '/specialists/man.png';
  srcWoman: string = '/specialists/woman.png';
  actualArraySpecialists: specialist[];
  valuePerson: string = null;
  valueJob: string = null;
  constructor(
    public companyStoreService: CompanyStoreService,
    public companyActionsService: CompanyActionsService
  ) {}

  ngOnInit(): void {
    if (this.companyStoreService.isFilter) {
      this.actualArraySpecialists =
        this.companyStoreService.listSpecialistsFilter;
    } else {
      this.actualArraySpecialists = this.companyStoreService.listSpecialists;
    }
  }
  removeSpecialist(id: number) {
    this.actualArraySpecialists = this.actualArraySpecialists.filter((item) => {
      console.log(item['id'], id);
      return !(+item['id'] === +id);
    });
    if(!this.companyStoreService.isFilter){
      this.companyStoreService.listSpecialists =  this.actualArraySpecialists;
    }
  }
  salaryPlus() {
    this.companyActionsService.salaryPlus();
  }
  salaryMinus() {
    this.companyActionsService.salaryMinus();
  }
  agePlus() {
    this.companyActionsService.agePlus();
  }
  ageMinus() {
    this.companyActionsService.ageMinus();
  }
  clear() {
    this.companyActionsService.clear();
  }
  filter() {
    this.companyStoreService.listSpecialistsFilter =
      this.companyStoreService.listSpecialists;
    if (this.valuePerson) {
      this.companyStoreService.listSpecialistsFilter =
        this.companyStoreService.listSpecialistsFilter.filter((item) => {
          return item['person'] === this.valuePerson;
        });
    }

    if (this.valueJob !== null) {
      this.companyStoreService.listSpecialistsFilter =
        this.companyStoreService.listSpecialistsFilter.filter((item) => {
          console.log(item['job'], this.valueJob);
          return item['job'] === this.valueJob;
        });
    }
    this.valueJob = null;
    this.valuePerson = null;
    this.companyStoreService.isFilter = !this.companyStoreService.isFilter;
    if (this.companyStoreService.isFilter) {
      this.actualArraySpecialists =
        this.companyStoreService.listSpecialistsFilter;
    } else {
      this.actualArraySpecialists = this.companyStoreService.listSpecialists;
    }
  }
}
