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
import { MeComponent } from './me/me.component';
import { New4Component } from './herrmann/new4/new4.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListTestsComponent } from './tests/list-tests/list-tests.component';
  
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AfterLoginGuard],
    children: [
      {path: '', component: MainSectionComponent}
    ]
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
      {path: 'new4', component: New4Component},
      {path: 'interpret', component: ResultsComponent}
    ]
  },
  {
    //Rutas para la manipulación de usuarios.
    path: 'users',
    component: PagesComponent,
    canActivate: [AfterLoginGuard],
    children: [
      {path: '', component: ListUsersComponent}
    ]
  },
  {
    path: 'tests',
    component: PagesComponent,
    canActivate: [AfterLoginGuard],
    children: [
      {path: '', component: ListTestsComponent}
    ]
  },
  {
    path: 'me',
    component: PagesComponent,
    canActivate: [AfterLoginGuard],
    children: [
      {path: '', component: MeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule 
{}
