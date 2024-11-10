import { Injectable } from '@angular/core';
import { CompanyStoreService } from './company-store.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyActionsService {
  constructor(public companyStoreService:CompanyStoreService) { }
  salaryPlus(){
    this.companyStoreService.listSpecialists.sort((a,b)=> +(a['salary'] - +(b['salary'])));
    this.companyStoreService.listSpecialistsFilter.sort((a,b)=> +(a['salary'] - +(b['salary'])));
  }
  salaryMinus(){
    this.companyStoreService.listSpecialists.sort((a,b)=> +(b['salary'] - +(a['salary'])));
    this.companyStoreService.listSpecialistsFilter.sort((a,b)=> +(b['salary'] - +(a['salary'])));
  }
  agePlus(){
    this.companyStoreService.listSpecialists.sort((a,b)=> +(a['age'] - +(b['age'])));
    this.companyStoreService.listSpecialistsFilter.sort((a,b)=> +(a['age'] - +(b['age'])));
  }
  ageMinus(){
    this.companyStoreService.listSpecialists.sort((a,b)=> +(b['age'] - +(a['age'])));
    this.companyStoreService.listSpecialistsFilter.sort((a,b)=> +(b['age'] - +(a['age'])));
  }
  clear(){
    this.companyStoreService.listSpecialists = []
  }
}
