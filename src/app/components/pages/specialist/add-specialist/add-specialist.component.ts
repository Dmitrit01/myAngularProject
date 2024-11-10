import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MyValidators } from '../../form/my.validators';
import { CompanyStoreService } from '../../../../services/company/company-store.service';

@Component({
  selector: 'add-specialist',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './add-specialist.component.html',
  styleUrl: './add-specialist.component.scss'
})
export class AddSpecialistComponent implements OnInit{
  form:FormGroup;
  constructor(public companyStore:CompanyStoreService){

  }
  ngOnInit (){
    this.form = new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required,]),
      age:new FormControl('',[Validators.required,MyValidators.onlyNumber]),
      price:new FormControl('',[Validators.required,MyValidators.onlyNumber]),
      person:new FormControl('man'),
      job:new FormControl('web')
    })
  }
  submit(){
    console.log(this.form)
    this.companyStore.listSpecialists.push({
      firstname:this.form.value['firstname'],
      lastname:this.form.value['lastname'],
      age:this.form.value['age'],
      salary:this.form.value['price'],
      person:this.form.value['person'],
      job:this.form.value['job'],
      id:Number(Math.round((Math.random()*1000))),
    })
    this.form.reset()
  }
}
