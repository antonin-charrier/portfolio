import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { ProjectsComponent } from './features/projects/projects.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
