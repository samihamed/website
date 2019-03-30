import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';

@NgModule({
  declarations: [
    CvComponent,
  ],
  imports: [
    RouterModule,
    CvRoutingModule,
  ],
  providers: [],
})
export class CvModule { }
