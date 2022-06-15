import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { HomeComponent } from './home/home.component';
import { KalahaComponent } from './kalaha/kalaha.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'kalaha', component: KalahaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bindings', component: BindingsComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
