import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  showEvents: boolean = false;

  showMessage(): void {
    this.showEvents = !this.showEvents;
  }
}
