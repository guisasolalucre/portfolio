import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
   {
      path: '',
      component: CustomerViewComponent,
      children: [
         //projects
         {
            path: 'projects',
            loadChildren: () =>
                  import('./pages/projects/projects.module').then(
                     (m) => m.ProjectsModule
                  ),
         },
         //profile
         {
            path: 'profile',
            component: ProfileComponent
         },
         //contact
         {
            path: 'contact',
            component: ContactComponent
         },
      ],
   },
]

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CustomerViewRoutingModule { }
