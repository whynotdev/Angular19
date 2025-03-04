import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-comp',
  imports: [],
  templateUrl: './simple-comp.component.html',
  styleUrl: './simple-comp.component.css'
})
export class SimpleCompComponent {
  title = 'Angular Basics';
  description = 'This is a simple Angular application to demonstrate components and data binding.';

}
