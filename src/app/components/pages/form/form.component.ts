import { Component, OnInit } from '@angular/core';
import { GoBackComponent } from '../../go-back/go-back.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [GoBackComponent, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form: FormGroup;
  isCloseEye:boolean = false;
  srcEye:string = 'svg/eye.png';
  typeInput:string = 'password'

  constructor() {
    
  }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidators.restrictedEmail,
      ]),
      password: new FormControl(null, [
        Validators.minLength(16),
        Validators.required,
        MyValidators.minNumberDifferentCharacters(5,5,5,5,5),
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Витебск', Validators.required),
      }),
      skills: new FormArray([]),
    });
  }
  submit() {
    const formDate = { ...this.form.value };
    this.form.reset()
  }
  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({ address: { city } });
  }
  addSkills() {
    if (this.form.get('skills')['controls'].length < 7) {
      const control = new FormControl('', Validators.required);
      (this.form.get('skills') as FormArray).push(control);
    }
  }
  changeEye(){
    if(!this.isCloseEye){
      this.isCloseEye = true;
      this.srcEye = 'svg/hiddenEye.png';
      this.typeInput = 'text'
    }else{
      this.isCloseEye = false;
      this.srcEye = 'svg/eye.png';
      this.typeInput = 'password'
    }
  }
}
