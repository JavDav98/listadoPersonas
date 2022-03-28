import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  environment = {
    production: false,
    firebase: {
      apiKey: 'xxxxx',
      authDomain: 'aaaaaaa',
      databaseURL: 'bbbbbbbbbbbbbbbbbb',
      projectId: 'aaaaaaaaaaaaaa',
      storageBucket: 'aaaaaaaaaaaa',
      messagingSenderId: 'aaaaaaaaaaaaa'
    }
  };

  constructor() {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAbhVIlfR2_NU56l7bDN0TWepc0jtq9xlA",
      authDomain: "listadopersonas-c3253.firebaseapp.com",
      databaseURL: "https://listadopersonas-c3253-default-rtdb.firebaseio.com",
      projectId: "listadopersonas-c3253",
      storageBucket: "listadopersonas-c3253.appspot.com",
      messagingSenderId: "403623206797",
      appId: "1:403623206797:web:98e8caf33bf5218d3967c4",
      measurementId: "G-VXYWWZYBQH"
    })
  }

}
