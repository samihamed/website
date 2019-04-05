import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/') { this.router.navigate(['blog']) }
  }
}
