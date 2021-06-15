import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http: HttpClient) { }

  fetchDataFromApi (category: string): Observable<any> {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=boolean`;
    return this.http.get(url);
  }
}
