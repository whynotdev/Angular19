import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: string = 'Arif';
  rollNo: number = 212;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myplaceholder: string = 'First Name';
  selectedOption: string = "";
  constructor() {
    console.log(this.firstName);
  }

  welcome() {
    alert('welcome to Angular Arif');
  }
}
