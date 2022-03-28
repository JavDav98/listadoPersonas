import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService{
  token: string;
  auth: Auth;
  user: any;
  constructor(private router:Router){}

  login(email: string, password: string){
    this.auth= getAuth();
    signInWithEmailAndPassword(this.auth, email, password)
      .then((response) => {
        // Signed in
        response.user.getIdToken().then(
          token=>{
            this.token = token;
            console.log("Token obtenido --- "+token);
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
