import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  employees: IEmployee[] = [
    {
      id: 1,
      code: 'VOD1410',
      name: 'Akshay Patel',
      salary: 3000
    },
    {
      id: 2,
      code: 'VOD1710',
      name: 'Panth Patel',
      salary: 1500
    },
    {
      id: 2,
      code: 'VOD0408',
      name: 'Satish Patel',
      salary: 5000
    }
  ];
}
