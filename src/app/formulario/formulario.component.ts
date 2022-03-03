import {Component, EventEmitter, Output} from '@angular/core';
import {Persona} from "../../models/Persona.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = "";
  apellidoInput: string = "";

  agregarPersona(){
    let p = new Persona(this.nombreInput, this.apellidoInput);
    // this.personas.push(p);
    this.personaCreada.emit(p);
  }

}
