
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    RouterModule,
    BlogRoutingModule,
  ],
  providers: [],
})
export class BlogModule { }
