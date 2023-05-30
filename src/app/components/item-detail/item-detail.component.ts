import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  public animal?: Animal;

  constructor(
    private _listService: ListService,
    private _route: ActivatedRoute,
  ) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._listService.getItem(id).subscribe((animal) => this.animal = animal)
  }
}
