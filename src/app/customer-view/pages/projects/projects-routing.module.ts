import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
   {
         path: '',
         component: ProjectsComponent,
   },
   {
         path: ':id',
         component: ProjectDetailComponent,
   },
];

@NgModule({
   imports: [CommonModule, RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ProjectsRoutingModule {}
