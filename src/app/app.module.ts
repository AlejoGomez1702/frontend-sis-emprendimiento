import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner'
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NotFoundComponent } from './components/common/not-found/not-found.component'; // => error 404. 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { ChartsModule } from 'ng2-charts'; // => Gráficas


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,    
    ChartsModule
  ],
  
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
