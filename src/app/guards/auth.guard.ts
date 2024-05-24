import { inject } from "@angular/core"
import { TokenService } from "../token/token.service"
import { Router } from "@angular/router";
import { LoginService } from "../login/login/login.service";

export const authGuard = () => {
  const loginService = inject(LoginService)
  const router = inject(Router);

  if(loginService.estaLogado()){
    return true

  }else{
    router.navigate([''])
    return false
  }
}
