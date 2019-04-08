import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class='centered-container'>
      <app-divider></app-divider>
    </div>
    <app-main-view (window:scroll)="scroll()"></app-main-view>
    <button
      (click)='scrollToTop()'
      id='scrollButton'
    >Top</button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showScrollButton: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/') { this.router.navigate(['blog']); }
  }

  scroll(): void {
    const el = document.scrollingElement || document.documentElement;
    el.scrollTop > 350
      ? document.getElementById('scrollButton').style.display = 'block'
      : document.getElementById('scrollButton').style.display = 'none';
  }

  scrollToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
