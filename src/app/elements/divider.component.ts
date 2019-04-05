import { Component } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  constructor(public greetingService: GreetingService) {}
  onClickGreeting(): void { this.greetingService.updateGreeting(); }
}
