import { Component, OnInit } from '@angular/core';
import {Persona} from "../models/Persona.model";
import { PersonaService } from './service/PersonasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona [] = [];

  constructor(private personaService: PersonaService){ }
  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

/*  personaAgregada( p: Persona){
    this.personaService.agregarPersona(p);
  }*/

}
