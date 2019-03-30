import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipComponent } from './features/wip/wip.component';

const routes: Routes = [
  { path: '', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'wip', component: WipComponent },
  { path: 'hobbies', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'contact', redirectTo: 'wip', pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
