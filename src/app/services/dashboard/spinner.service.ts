import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService 
{
  constructor(
    private spinner: Ng4LoadingSpinnerService
  ) 
  { }

  /**
   * Muestra por 2 segundos un spinner de carga.
   */
  showSpinner()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }

  showAlertDialog(txt: string)
  {
    Swal.fire(
      'Error!',
      txt,
      'warning'
    );
  }

  showSuccesDialog()
  {
    Swal.fire(
      'Buen Trabajo!',
      'Se Guardaron Los Cambios!',
      'success'
    )
  }

  // deleteTest(id)
  // {
  //   Swal.fire({
  //     title: '¿Está seguro?',
  //     text: "Eliminará Permanentemente El Test!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Sí, Eliminar',
  //     cancelButtonText:'Cancelar',
  //     reverseButtons: true
  //   }).then((result) => {
      
  //     if (result.value) 
  //     {
  //       this.testsService.delete(id).subscribe(
  //         res => this.handleResponseDelete(res)
  //       );
  //     }
  //   });
  // }

  // handleResponseDelete(res)
  // {
  //   this.testsService.list().subscribe(
  //     response => this.handleResponse(response)
  //   );

  //   Swal.fire(
  //     'Correcto!',
  //     'Test eliminado!',
  //     'success'
  //   );
  // }

}
