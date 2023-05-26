import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  public name: string = 'Wanderson';
  public age: number = 33;
  public job: string = 'Dev';
  public hobbies: Array<String> = ['Correr', 'Jogar', 'Estudar']
  public car: { name: string, year: number} = {
    name: 'Polo',
    year: 2020,
  }
}
