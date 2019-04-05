import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="centered-container">
      <app-divider></app-divider>
    </div>
    <app-main-view></app-main-view>
  `,
  styles: [`
    .centered-container {
      text-align: center;
    }

    a > h2 { margin: 0; }

    h2 { margin: 0 }
  `],
})
export class AppComponent {
  title = 'website';
}
