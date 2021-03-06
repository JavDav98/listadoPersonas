import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Persona} from "../models/Persona.model";
import {LoginService} from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, private  loginService: LoginService) { }
  url: string = 'https://listadopersonas-c3253-default-rtdb.firebaseio.com/datos';
  /*Guardar Personas*/
  guardarPersonas(personas: Persona[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put(`${this.url}.json?auth=${token}`, personas)
      .subscribe(
        responde => {
          console.log("resultado de guardar las personas" + responde)
        },
        error => console.log("Error al guardar personas" + error)
      );
  }

  modificarPersona(index: number, persona: Persona){
    const token = this.loginService.getIdToken();
    let url: string = `${this.url}/${index}/.json?auth=${token}`
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("Resultado de modificar el objeto Persona" + response),
        error => console.log("Ha ocurrido un error" + error)
      )
  }

  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get(`${this.url}.json?auth=${token}`);
  }

  eliminarPersona(index: number){
    const token = this.loginService.getIdToken();
    return this.httpClient.delete( `${this.url}/${index}/.json?auth=${token}`)
      .subscribe(
        response => console.log("Resultado de elimiar el objeto Persona" + response),
        error => console.log("Ha ocurrido un error en la eliminación" + error)
      )
  }

}
