import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KalahaComponent } from './kalaha/kalaha.component';
import { TodoComponent } from './todo/todo.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'kalaha', component: KalahaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
