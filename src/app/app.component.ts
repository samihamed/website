import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <div class="centered-container">
      <app-divider></app-divider>
      <!-- TODO(sami): Add dynamic state title below -->
      <h2 routerLink="/blog">
        CURRICULUM VITAE OF
        <a href="https://github.com/samihamed" target="_blank">SAMI HAMED</a>
        , LEAD SOFTWARE DEVELOPER
      </h2>
      <div class="centered-container">
        <a routerLink="/cv">CV</a>
        <a routerLink="/blog">BLOG</a>
      </div>
      <app-divider></app-divider>
    </div>
    <app-main-view></app-main-view>
  `,
  styles: [`
    .centered-container {
      text-align: center;
    }
  `],
})
export class AppComponent {
  title = 'website';
}
