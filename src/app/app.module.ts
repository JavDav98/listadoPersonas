import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './service/LoggingService.service';
import {PersonaService} from "./service/PersonasService.service";
import { PersonasComponent } from './personas/personas.component';
import { IonicModule } from '@ionic/angular';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {GuardianService} from './login/guardian.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,

  ],
  providers: [LoggingService,
              PersonaService,
              GuardianService],
  bootstrap: [AppComponent]
})
export class AppModule { }
