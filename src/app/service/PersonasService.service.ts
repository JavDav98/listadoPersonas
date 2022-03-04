import {Persona} from "../../models/Persona.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PersonaService{

  personas: Persona [] = [
    new Persona("Javier",  "Dávila"),
    new Persona("Ilse", "Dávila"),
    new Persona("Juan", "Lemus")
  ];


  saludar = new EventEmitter<string>();

  constructor(private loggingService: LoggingService){}

  agregarPersona( p: Persona){
    this.loggingService.enviaMensajeConsola("Agregar Persona "+p.nombre)
    this.personas.push(p);
  }
}
