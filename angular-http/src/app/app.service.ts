import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer.model'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'http://mi-api.com'; 

  constructor(private _http: HttpClient) { }

  obtenerRespuesta(): Observable<Answer> {
    return this._http.get<Answer>(this.apiUrl);
  }
}