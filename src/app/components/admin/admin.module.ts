import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
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
import { AngularFileUploaderModule } from "angular-file-uploader";
import { New4Component } from './herrmann/new4/new4.component';
import { ListUsersComponent } from './users/list-users/list-users.component'; // => File upload
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ListTestsComponent } from './tests/list-tests/list-tests.component';
import { ListTestsUserComponent } from './tests/list-tests-user/list-tests-user.component';
import { WelcomeMaslowComponent } from './maslow/welcome-maslow/welcome-maslow.component';
import { NewMaslowComponent } from './maslow/new-maslow/new-maslow.component';
import { New2MaslowComponent } from './maslow/new2-maslow/new2-maslow.component';
import { New3MaslowComponent } from './maslow/new3-maslow/new3-maslow.component';
import { New4MaslowComponent } from './maslow/new4-maslow/new4-maslow.component';
import { ResultsMaslowComponent } from './maslow/results-maslow/results-maslow.component';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';


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
    ResultsComponent, 
    MeComponent, 
    New4Component, 
    ListUsersComponent, 
    ListTestsComponent, ListTestsUserComponent, WelcomeMaslowComponent, NewMaslowComponent, New2MaslowComponent, New3MaslowComponent, New4MaslowComponent, ResultsMaslowComponent 
  ],  
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    MaterialModule,  
    ChartsModule,
    AngularFileUploaderModule, 
    Ng2TableModule,
    // TooltipModule.forRoot()
    // Ng2TableModule, NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective
  ],
  providers: [
    DatePipe,
  ]

})
export class AdminModule { }
