import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WipGuard } from './core/guards/wip.guard';
import { AboutComponent } from './features/about/about.component';
import { CareerComponent } from './features/career/career.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { HomeComponent } from './features/home/home.component';
import { WipComponent } from './features/wip/wip.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [WipGuard]},
  { path: 'wip', component: WipComponent },
  { path: 'career', component: CareerComponent, canActivate: [WipGuard] },
  { path: 'hobbies', component: HobbiesComponent, canActivate: [WipGuard] },
  { path: 'about', component: AboutComponent, canActivate: [WipGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
