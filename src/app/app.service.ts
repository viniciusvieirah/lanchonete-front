import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


// isso vai ser aplicavel para um escopo raiz
@Injectable({providedIn: 'root'})
export class AppService {

  constructor( private http: HttpClient) {}
  public lanches: any;
  listLunchs() {
    return this.http.get<Object[]>('http://127.0.0.1:8080/lunch');
  }
  postLunch(order: any) {
    return this.http.post<Object[]>('http://127.0.0.1:8080/purchase/', order);
  }




}
