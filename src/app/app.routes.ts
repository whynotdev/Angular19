import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Routing/home/home.component';
import { ProfileComponent } from './Routing/profile/profile.component';
import { UserListComponent } from './Routing/user-list/user-list.component';
import { ComponentLoginComponent } from './Forms/component-login/component-login.component';
import { LoginpageComponent } from './AngMaterial/loginpage/loginpage.component';


export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'Form',
    component: ComponentLoginComponent
  },
  {
    path: 'login',
    component:LoginpageComponent
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
