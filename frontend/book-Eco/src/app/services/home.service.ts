import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../books';
import * as bonjour from 'bonjour';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  api = "http://localhost:3000/api/books/"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  getBooks():Observable<any[]>{
    // console.log(this.api)
    return this.http.get<any[]>(`${this.api}/get`)

  }
  createBook(book:Book):Observable<Book>{
  console.log(this.api)
  return this.http.post<Book>(`${this.api}/create`,book, this.httpOptions)


  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.api}/${id}`, this.httpOptions)
  }
  updateHero(book:Book, id: any ): Observable<any> {
    return this.http.put(`${this.api}/${id}` , book,this.httpOptions)
  }
}
