import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';

@NgModule({
  declarations: [
    ConnectComponent,
  ],
  imports: [
    RouterModule,
    ConnectRoutingModule,
  ],
  providers: [],
})
export class ConnectModule { }
