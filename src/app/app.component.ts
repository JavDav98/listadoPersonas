import { Component } from '@angular/core';
import {Persona} from "../models/Persona.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona [] = [new Persona("Javier",  "Dávila"), new Persona("Ilse", "Dávila"), new Persona("Juan", "Lemus")];
}
