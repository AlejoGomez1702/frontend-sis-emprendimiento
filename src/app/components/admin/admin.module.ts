import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PagesRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { NavbarLeftComponent } from './dashboard/navbar-left/navbar-left.component';
import { NavbarTopComponent } from './dashboard/navbar-top/navbar-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material.module';
 
import { FooterListsComponent } from '../common/footer-lists/footer-lists.component';
import { MainSectionComponent } from './dashboard/main-section/main-section.component';

@NgModule({
  
  declarations: [
    PagesComponent,
    NavbarLeftComponent,
    NavbarTopComponent,
    FooterListsComponent, 
    MainSectionComponent 
  ],  
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    MaterialModule,  
  ],
  providers: [
    DatePipe,
  ]

})
export class AdminModule { }
