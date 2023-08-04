import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import {Environment} from "../app/.env"
@Injectable()
export class Interceptor implements HttpInterceptor{
    // constructor(env:Environment){

    // }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
    const baseUrl = "http://localhost:3000"; // Set your default base URL here
    const token="Bearer "+sessionStorage.getItem('accessToken')
    // Dynamically extract the base URL from the request
    const apiUrl = request.url.startsWith('http') ? request.url : `${baseUrl}/${request.url}`;

    // Clone the request and set the new URL with the extracted base URL
    const newRequest = request.clone({ url: apiUrl,setHeaders:{"Authorization":token} });

    // Continue with the updated request
    return next.handle(newRequest);

    }
}