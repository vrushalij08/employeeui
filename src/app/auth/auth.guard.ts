import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
  token:any;
  constructor( private router: Router) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    this.token=sessionStorage.getItem("accessToken")
    if (this.token) {
        // console.log("authguard")
      // If the user is authenticated, allow access to the route
      return true;
    } else {
      // If the user is not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}