import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl, Validators } from '@angular/forms';
import { NgIf,NgFor } from '@angular/common';
import { CompanyStoreService } from '../../../../services/company/company-store.service';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgIf,NgFor,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
  form:FormGroup;
  constructor(public companyStoreService:CompanyStoreService){}
  ngOnInit(){
    this.form = new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required,]),
      id:new FormControl('',[Validators.required,]),
    })
  }
  submit(){
    console.log(this.form.value)
    this.form.value.numId = ((Math.random()*1000)).toFixed();
    this.form.value.state = 'start';
    this.companyStoreService.startArrayTasks.push(this.form.value);
    this.form.reset()
  }
}
