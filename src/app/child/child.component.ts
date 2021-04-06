import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/register';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  form2: FormGroup;
  submitted = false;
  @Input() userData:User; 
  @Output() sendData= new EventEmitter();


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
     this.form2 = this._fb.group({
     city: ["", [Validators.required]],
     address: ["", [Validators.required]],
     contactnumber: ["", [Validators.required , Validators.pattern(/^\d*$/)]]
  })
}
onSubmit(){
  
  this.userData.address=this.form2.value;
  this.submitted=true;
  this.sendData.emit(this.userData);
}
}
