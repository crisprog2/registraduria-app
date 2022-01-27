import { Injectable } from '@angular/core';
import { Consulta } from './consulta';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private urlEndPoint:string = 'http://localhost:8080/api/consulta';

  constructor(private http: HttpClient) { }

  getConsulta(id: number): Observable<Consulta>{
    return this.http.get<Consulta>(`${this.urlEndPoint}/${id}`);
  }

}
