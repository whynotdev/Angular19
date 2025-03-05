import { Component } from '@angular/core';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { SimpleCompComponent } from './Component/simple-comp/simple-comp.component';
import { EventBindingComponent } from './Component/event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  imports: [EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangular';

  // showModal = false;

  // openModal() {
  //   this.showModal = true;
  // }

  // closeModal() {
  //   this.showModal = false;
  // }

  // destroyDirective() {
  //   alert('Directive will be destroyed.');
  //   // Logic for destroying the directive can be handled here
  // }


}