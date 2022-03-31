import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  token: any;
  auth: Auth;

  constructor(private router:Router){}

  login(email: string, password: string){
    this.auth= getAuth();
    signInWithEmailAndPassword(this.auth, email, password)
      .then((response) => {
        // Signed in
        response.user.getIdToken().then(
          (token) => {
            this.token = token;
            console.log("Token obtenido --- "+token);
            this.router.navigate(['/']);
          })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  getIdToken(){
    return this.token;
  }

  isAutentiquete(){
    return this.token != null;
  }

  logOut(){
    getAuth().signOut().then( () => {
      this.token = null;
      this.router.navigate(['login']);
    }).catch(error => console.log('Ocurrio un error: ' + error))
  }
}
