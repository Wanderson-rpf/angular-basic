/**
 * O serviço é usado para tratar os dados do banco de dados ou API,
 * como não temos um banco de dados aqui, estamos simulando com um botão (componente).
 */

import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _apiUrl = 'http://localhost:3000/animals'

  constructor(private _http: HttpClient) { }

  remove(animals: Array<Animal>, animal: Animal) {
    return animals.filter((a) => a.name !== animal.name);
  }

  getAll(): Observable<Animal[]> {
    return this._http.get<Animal[]>(this._apiUrl);
  }
}
