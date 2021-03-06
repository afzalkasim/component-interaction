import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/register';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  form: FormGroup;
  reg:boolean=true;
  edu:boolean=false;
  addr:boolean=false;
  viewdetails:boolean=false;
  submitted = false;
  userDetails=new User();
  
  constructor(private _fb: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.form = this._fb.group({
      name : ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      gender: ["", [Validators.required]],
      Dob: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
    
  })
  }
  onSubmit(){
    this.userDetails=this.form.value;
    this.submitted=true;
    console.log(this.userDetails);
    this.reg=false;
    this.addr=true;
  }
  getdetails(value:User){
  console.log(value);
  this.userDetails=value;
  this.addr=false;
  this.edu=true;
  }
  getfinalvalue(data:User){
    console.log(data);
    this.userDetails=data;
    this.edu=false;
    this.viewdetails=true;

    }
}
