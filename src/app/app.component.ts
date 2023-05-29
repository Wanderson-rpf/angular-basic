import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Dados compartilhados
   * - userName
   * - userData
   */
  userName: string = 'Joaquim';
  userData = {
    email: 'teste@teste.com',
    role: 'admin',
  };

  title = 'cusro-angular';
}
