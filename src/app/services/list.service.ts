/**
 * O serviço é usado para tratar os dados do banco de dados,
 * como não temos um banco de dados aqui, estamos simulando com um botão (componente).
 */

import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Array<Animal>, animal: Animal) {
    return animals.filter((a) => a.name !== animal.name);
  }
}
