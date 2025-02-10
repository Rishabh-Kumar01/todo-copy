import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component.js';
import { LoginComponent } from './components/login/login.component.js';
import { TodoPageComponent } from './components/todo-page/todo-page.component.js';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodoPageComponent },
];
