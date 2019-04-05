import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  greeting: string;
  greetings = [
    'MOIN',
    'GUDE',
    'HELLO',
    'HOLA',
    'OLÁ',
    'SHALOM',
    'SALĀM',
    'HEJ',
    'ПРИВЕТ',
    'হ্যালো',
    'مرحبا',
  ];

  constructor() { this.greeting = this.greetings[0]; }
  updateGreeting(): void { this.greeting = this.greetings[Math.round(Math.random() * (this.greetings.length - 1))]; }
}
