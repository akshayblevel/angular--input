import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html'
})
export class ParentComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  employee: IEmployee = {
    id: 1,
    code: 'VOD1410',
    name: 'Akshay Patel',
    salary: 3000
  };
}
