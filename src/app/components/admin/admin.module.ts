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
import { WelcomeComponent } from './herrmann/welcome/welcome.component';
import { NewComponent } from './herrmann/new/new.component';
import { New2Component } from './herrmann/new2/new2.component';
import { New3Component } from './herrmann/new3/new3.component';
import { ResultsComponent } from './herrmann/results/results.component';

import { ChartsModule } from 'ng2-charts';
import { MeComponent } from './me/me.component'; // => Gráficos 

@NgModule({
  
  declarations: [
    PagesComponent,
    NavbarLeftComponent,
    NavbarTopComponent,
    FooterListsComponent, 
    MainSectionComponent, 
    WelcomeComponent, 
    NewComponent, 
    New2Component, 
    New3Component, 
    ResultsComponent, MeComponent 
  ],  
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    MaterialModule,  
    ChartsModule
  ],
  providers: [
    DatePipe,
  ]

})
export class AdminModule { }
