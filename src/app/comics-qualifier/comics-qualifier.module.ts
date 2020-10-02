import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsQualifierRoutingModule } from './comics-qualifier-routing.module';
import { ComicsQualifierMainComponent } from './components/comics-qualifier-main/comics-qualifier-main.component';


@NgModule({
  declarations: [ComicsQualifierMainComponent],
  imports: [
    CommonModule,
    ComicsQualifierRoutingModule
  ]
})
export class ComicsQualifierModule { }
