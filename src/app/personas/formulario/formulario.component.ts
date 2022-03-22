import {Component, /*ElementRef,*/ EventEmitter, OnInit, Output, /*ViewChild*/} from '@angular/core';
import {Persona} from "../../../models/Persona.model";
import {LoggingService} from "../../service/LoggingService.service";
import {PersonaService} from "../../service/PersonasService.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  @Output() personaCreada = new EventEmitter<Persona>();
/*  @ViewChild('nombreInput') nombreI: ElementRef;
  @ViewChild('apellidoInput')apellidoI: ElementRef;*/
  nombreInput: string;
  apellidoInput: string;
  index: number;
  edit: number;

  constructor(private loggingService: LoggingService,
              private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.personaService.saludar.subscribe(
      (indice: number) => {alert("el indice es "+indice)}
    );
  };

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.edit = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.edit != null && this.edit === 1 ) {
        let persona: Persona = this.personaService.encontrarPersona(this.index);
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
    }
   }



 guardarPersona(/*nombre: HTMLInputElement, apellido: HTMLInputElement*/){
    let p = new Persona(/*nombre.value, apellido.value*/this.nombreInput, this.apellidoInput);
    // this.personas.push(p);
    //this.personaCreada.emit(p);

    /*let p1 = new Persona(
      this.nombreI.nativeElement.value,
      this.apellidoI.nativeElement.value + " @ViewChild",
    );
    this.personaService.agregarPersona(p1);*/
    //this.personaCreada.emit(p1);
    // this.loggingService.enviaMensajeConsola("enviamos mensaje");

    if (this.edit != null && this.edit === 1 ){
      this.personaService.modPersona(this.index, p);
    }else{
      this.personaService.agregarPersona(p);
    }
    this.router.navigate(['personas']);
  }

  deletePersona(){
    if (this.edit != null && this.edit === 1 ){
      this.personaService.eliminarPersona(this.index)
    }else{
      alert('Datos no disponibles');
    }
    this.router.navigate(['personas']);
  }

}
