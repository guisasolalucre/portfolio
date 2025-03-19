import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./customer-view/customer-view.module').then(r => r.CustomerViewModule)
  }, 

  {path: '', redirectTo: 'home/profile', pathMatch: 'full'},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
