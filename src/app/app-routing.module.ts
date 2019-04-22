import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipComponent } from './features/wip/wip.component';
import { WipGuard } from './core/guards/wip.guard';
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [WipGuard]},
  { path: 'wip', component: WipComponent },
  { path: 'hobbies', component: HobbiesComponent, canActivate: [WipGuard] },
  { path: 'about', component: AboutComponent, canActivate: [WipGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
