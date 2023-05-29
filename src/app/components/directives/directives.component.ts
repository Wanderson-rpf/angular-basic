import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  // Usando diretivas para estilizar por parametros
  size = 40;
  font = 'arial';
  bg = 'blue';

  classes = ['green-title', 'small-title',];
  underline = 'underline-title';
}
