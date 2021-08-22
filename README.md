# angular-@input

employee.ts

```js
export interface IEmployee {
  id: number;
  code: string;
  name: string;
  salary: number;
}
```

parent-component.component.ts

```js
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
```

child-component.component.ts

```js
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
  @Input() emp: IEmployee;
}
```

child-component.component.html

```html
<h2>Employee Details</h2>
<div>
  <div>
    {{emp.id}}
    <hr />
    {{emp.name}}
  </div>
</div>
```

parent-component.component.html

```html
<app-child-component [emp]="employee"></app-child-component>
```

app.module.ts

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

app.component.html

```html
<app-parent-component></app-parent-component>
```
