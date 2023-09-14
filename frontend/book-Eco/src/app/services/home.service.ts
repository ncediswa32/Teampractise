import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = "http://localhost:3000/api/books/get"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  getBooks():Observable<any[]>{
    console.log(this.api)
    return this.http.get<any[]>(this.api)

    


  }


}
