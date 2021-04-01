import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parentData:string;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.childEvent.emit("hi");
  }

}
