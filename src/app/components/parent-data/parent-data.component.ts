import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {
  @Input() name: string = ''; // inicializando input que receberá dados compartilhado.
  @Input() userData!: {email: string, role: string}
}
