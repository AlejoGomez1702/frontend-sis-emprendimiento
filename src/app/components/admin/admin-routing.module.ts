import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AfterLoginGuard } from '@myGuards/after-login.guard';
import { MainSectionComponent } from '@myComponents/admin/dashboard/main-section/main-section.component';
import { WelcomeComponent } from '@myComponents/admin/herrmann/welcome/welcome.component';
import { NewComponent } from '@myComponents/admin/herrmann/new/new.component';
import { New2Component } from '@myComponents/admin/herrmann/new2/new2.component';
import { New3Component } from './herrmann/new3/new3.component';
import { ResultsComponent } from './herrmann/results/results.component';
  
const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    canActivate: [AfterLoginGuard]
  },
  {
    // Rutas para el test de herrmann.
    path: 'herrmann',
    component: PagesComponent,
    canActivate: [AfterLoginGuard],
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'new', component: NewComponent},
      {path: 'new2', component: New2Component},
      {path: 'new3', component: New3Component},
      {path: 'interpret', component: ResultsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule 
{}
