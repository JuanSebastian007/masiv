import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsQualifierMainComponent } from './components/comics-qualifier-main/comics-qualifier-main.component';

const routes: Routes = [{ path: '', component: ComicsQualifierMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsQualifierRoutingModule {}
