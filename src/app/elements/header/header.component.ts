import { Component } from '@angular/core';
import { GreetingService } from 'src/app/greeting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public greetingService: GreetingService) {}
  onClickGreeting(): void { this.greetingService.updateGreeting(); }
}
