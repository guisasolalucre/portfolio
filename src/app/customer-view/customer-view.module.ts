import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsModule } from './pages/projects/projects.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    CustomerViewComponent,
    SidebarComponent,
    ToolbarComponent,
    ProfileComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    CustomerViewRoutingModule,
    ProjectsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: [
    CustomerViewComponent,
    FooterComponent
  ]
})
export class CustomerViewModule { }
