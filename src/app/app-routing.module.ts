import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { ProjectsComponent } from './features/projects/projects.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { animation: 'aboutPage' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projectsPage' } },
  { path: 'hobbies', component: HobbiesComponent, data: { animation: 'hobbiesPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contactPage' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
