import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/register';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: FormGroup;
  submitted = false;
  @Input() finalValue:User;
  @Output() edudata=new EventEmitter();
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void { 
    this.education = this._fb.group({
    collagename : ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    passedout: ["", [Validators.required]],
    score: ["", [Validators.required]],
  
})
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.education.value);
    this.finalValue.education=this.education.value;
    this.edudata.emit(this.finalValue);
  }

}
