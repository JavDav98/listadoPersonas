import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor() {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAbhVIlfR2_NU56l7bDN0TWepc0jtq9xlA",
      authDomain: "listadopersonas-c3253.firebaseapp.com"
    })
  }

}
