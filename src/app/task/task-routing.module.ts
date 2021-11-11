import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:"task-details/:id",component:TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
  