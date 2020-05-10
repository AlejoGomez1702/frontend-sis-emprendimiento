import { Component, OnInit } from '@angular/core';
import { TokenService } from '@myServices/token.service';
import { User } from '@myInterfaces/user';
import {FormControl, Validators} from '@angular/forms';
import { MainService } from '@myServices/dashboard/main.service';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit 
{
  public apiUrl = environment.apiUrl;
  // Utilizado para la validación del correo electrónico.
  email = new FormControl('', [Validators.required, Validators.email]);

  //Me indica si el usuario quiere cambiar la contraseña.
  public changePassword: boolean = false;

  public imgNew: string = "general_user.jpeg";

  public user = null;
  public userUpdate: User;
  
  // private URL = "http://localhost:8000/api/";

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: environment.apiUrl + 'user/upload/avatar',
      headers: {
      "Authorization" : this.tokenService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Seleccionar Imagen...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private tokenService: TokenService,
    private mainService: MainService,
    private router:Router
  ) 
  {
    this.initInformation();    
  }

  ngOnInit() 
  {
    this.getUser();
  }

  //Sirve para el campo de email
  getErrorMessage() 
  {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Ingrese un correo válido' : '';
  }

  initInformation()
  {
    this.user = {
      name: "",
      surname: "",
      email: "", 
      description: "",
      image: "general_user.jpeg"
    };

    this.userUpdate = {
      name: "",
      surname: "",
      email: "",
      description: "",
      image: ""
    };

  }

  /**
   * Actualiza el usuario.
   */
  updateUser()
  {
    // console.log("Le estoy enviando...")
    this.userUpdate.name = this.user.name;
    this.userUpdate.surname = this.user.surname;
    this.userUpdate.email = this.user.email;
    this.userUpdate.description = this.user.description;
    this.userUpdate.image = this.imgNew;

    this.mainService.updateUser(this.userUpdate).subscribe(
      res => this.handleResponseUpdate(res),
      error => this.handleErrorUpdate(error)
    );
  }

  getUser()
  {
    this.mainService.getUser().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    //console.log(this.mainService.getUser());
  }

  handleResponse(data)
  {
    this.user = data.user;
    console.log("El usuario que me retorna es")
    console.log(data.user);
  }

  handleError(error){
    console.log(error.error)
  }

  handleResponseUpdate(data)
  {
    console.log("Exitooooo!!!");
    Swal.fire(
      'Exito!',
      'Datos de usuario modificados correctamente!',
      'success'
    );
    //hacer un refresh del token 
    this.tokenService.refresh();    
  }

  handleErrorUpdate(error)
  {
    Swal.fire(
      'ERROR!',
      'Verifique los datos ingresados',
      'error'
    )
    console.log("ERRROOOOOORR!!!");
    console.log(error.error.errors.name);
  }

  avatarUpload(datos){
    // Luego de haber guardado la imagen del user en disco
    // console.log(JSON.parse(datos.response));
    let data=JSON.parse(datos.response);
    this.userUpdate.image = data.image;
    // se le añade al modelo la ruta de la imagen,para luego actualizarlo
    this.imgNew=data.image;
    console.log("La imagen que seleccioneeeee es: ")
    console.log(data.image);
    console.log(this.userUpdate);
  }

}
