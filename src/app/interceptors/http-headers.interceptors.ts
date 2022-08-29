import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req=req.clone({
            setHeaders:{
                'x-rapidapi-key':'48b80a41f0mshd34bdd23a7e5cadp1b470fjsnd36eed0aed8a',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key:'6c8fed5b658a4157bc572c40874bdee7'
            }

        })
        return next.handle(req);
    }
}