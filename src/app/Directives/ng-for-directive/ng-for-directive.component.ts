import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  imports: [NgFor],
  templateUrl: './ng-for-directive.component.html',
  styleUrl: './ng-for-directive.component.css',
})
export class NgForDirectiveComponent {
  items = ['Apple', 'Banana', 'Cherry', 'Date'];


  employee: any[]= [{
    empid:12,empName:"arif",
  },
  {
    empid:12,empName:"arif",
  },{
    empid:12,empName:"arif",
  },{
    empid:12,empName:"arif",
  }]
}
