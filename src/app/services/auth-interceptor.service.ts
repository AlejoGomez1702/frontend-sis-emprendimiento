import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor 
{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.token.getToken();

    let request = req;

    if(token){
      request = req.clone({
        setHeaders:{
          Authorization: 'Bearer ' + token
        }
      })
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && token) {
          //this.token.logout();
          this.mostrarMensaje()
        }

        return throwError( err );

      })
    );
  }

  mostrarMensaje(){
    let timerInterval
    Swal.fire({
      icon:'error',
      title: 'La sesión ha caducado',
      html: 'Vuelve a iniciar sesión',
      timer: 3000,
      timerProgressBar: true,
      onClose: () => {
        clearInterval(timerInterval)
        this.router.navigateByUrl('/user/login')

      }
    })
  }
  
  constructor(private token:TokenService, private router:Router) { }
}
