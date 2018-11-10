import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipComponent } from './features/wip/wip.component';

const routes: Routes = [
  { path: 'wip', component: WipComponent },
  { path: '', redirectTo: '/wip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
