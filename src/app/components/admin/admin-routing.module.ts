import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AfterLoginGuard } from '@myGuards/after-login.guard';
import { MainSectionComponent } from '@myComponents/admin/dashboard/main-section/main-section.component';
import { WelcomeComponent } from '@myComponents/admin/herrmann/welcome/welcome.component';
import { NewComponent } from '@myComponents/admin/herrmann/new/new.component';
  
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
      {path: 'new', component: NewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule 
{}
