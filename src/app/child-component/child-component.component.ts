import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../parent-component/employee';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() employees: IEmployee[];
}
