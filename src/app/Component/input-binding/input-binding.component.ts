import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  imports: [],
  template: `<p>Hello, {{ name }}!</p>`,


  styleUrl: './input-binding.component.css'
})
export class InputBindingComponent {
  @Input() name: string = '';

}
