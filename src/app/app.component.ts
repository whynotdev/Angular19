import { Component } from '@angular/core';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { SimpleCompComponent } from './Component/simple-comp/simple-comp.component';
import { EventBindingComponent } from './Component/event-binding/event-binding.component';
import { NgIfDirectiveComponent } from './Directives/ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './Directives/ng-for-directive/ng-for-directive.component';
import { UserListComponent } from './Services/user-list/user-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,RouterLink],
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