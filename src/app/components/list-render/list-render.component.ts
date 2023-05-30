import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  animals: Array<Animal> = [];

  animalDetails = '';

  constructor(
    private _listService: ListService,
  ) {
    this.getAnimals();
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => a.name !== animal.name);
    this._listService.remove(animal.id);
  }

  getAnimals(): void {
    this._listService.getAll()
      .subscribe((animals) => this.animals = animals);
  }
}
