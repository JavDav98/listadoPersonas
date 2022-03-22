import {Persona} from "../../models/Persona.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable} from "@angular/core";
import {DataService} from "../data.service";

@Injectable()
export class PersonaService{

  personas: Persona [] = [];


  saludar = new EventEmitter<string>();

  constructor(private loggingService: LoggingService,
              private  dataService: DataService){}

  setPersonas(person: Persona[]){
    this.personas = person;
  }

  agregarPersona( p: Persona){
    this.loggingService.enviaMensajeConsola("Agregar Persona "+p.nombre);
    if (this.personas == null){
      this.personas = [];
    }
    this.personas.push(p);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number){
    return this.personas[index];
  }

  modPersona(index: number, persona: Persona){
    let p = this.personas[index];
    p.nombre = persona.nombre;
    p.apellido = persona.apellido;
    this.dataService.modificarPersona(index, p);
  }

  eliminarPersona(index: number){
    this.personas.splice(index, 1)
    this.dataService.eliminarPersona(index);
    this.modificarPersonas();
  }

  modificarPersonas(){
    if (this.personas != null){
      this.dataService.guardarPersonas(this.personas);
    }
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }
}
