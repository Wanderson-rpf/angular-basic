import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  animals: Array<Animal> = [
    {name: 'Turca', type: 'dog', age: 4 },
    {name: 'Tom', type: 'cat', age: 10 },
    {name: 'Frida', type: 'dog', age: 5 },
    {name: 'Bob', type: 'Horse', age: 1 },
  ];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)`;
  }
}
