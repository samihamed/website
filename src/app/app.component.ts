import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <div class="centered-container">
      <app-divider></app-divider>
        <div class="flex-row">
          <a routerLink="/cv">
            <h2>
              CV
            </h2>
          </a>
          <a routerLink="/blog">
            <h2>
              BLOG
            </h2>
          </a>
          <h2>
            🚧 PROJECTS
          </h2>
        </div>
      <app-divider></app-divider>
    </div>
    <app-main-view></app-main-view>
  `,
  styles: [`
    .centered-container {
      text-align: center;
    }

    .flex-row {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    a > h2 { margin: 0; }

    h2 { margin: 0 }
  `],
})
export class AppComponent {
  title = 'website';
}
