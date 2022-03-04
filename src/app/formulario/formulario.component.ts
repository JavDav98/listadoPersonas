import {Component, /*ElementRef,*/ EventEmitter, Output, /*ViewChild*/} from '@angular/core';
import {Persona} from "../../models/Persona.model";
import {LoggingService} from "../service/LoggingService.service";
import {PersonaService} from "../service/PersonasService.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
/*  @ViewChild('nombreInput') nombreI: ElementRef;
  @ViewChild('apellidoInput')apellidoI: ElementRef;*/
  nombreInput: string;
  apellidoInput: string;

  constructor(private loggingService: LoggingService,
              private personaService: PersonaService) {
    this.personaService.saludar.subscribe(
      (indice: number) => {alert("el indice es "+indice)}
    );
  };

  agregarPersona(/*nombre: HTMLInputElement, apellido: HTMLInputElement*/){
    let p = new Persona(/*nombre.value, apellido.value*/this.nombreInput, this.apellidoInput);
    // this.personas.push(p);
    //this.personaCreada.emit(p);
    this.personaService.agregarPersona(p);

    /*let p1 = new Persona(
      this.nombreI.nativeElement.value,
      this.apellidoI.nativeElement.value + " @ViewChild",
    );
    this.personaService.agregarPersona(p1);*/
    //this.personaCreada.emit(p1);
    // this.loggingService.enviaMensajeConsola("enviamos mensaje");
  }

}
