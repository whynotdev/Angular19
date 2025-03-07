import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-component-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component-login.component.html',
  styleUrl: './component-login.component.css'
})
export class ComponentLoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(form: any): void {
    console.log('Form Submitted', form);
  }

}
