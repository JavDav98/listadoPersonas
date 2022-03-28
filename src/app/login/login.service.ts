import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  token: string;
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
}
