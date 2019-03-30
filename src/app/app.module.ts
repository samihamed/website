import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elements/header/header.component';
import { DividerComponent } from './elements/divider.component';
import { MainViewComponent } from './pages/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DividerComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
