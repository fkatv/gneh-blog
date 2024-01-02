import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RebotonComponent } from './reboton/reboton.component';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent},
  { path: 'landing', component: LandingComponent},
  //{ path: 'estrategias-para-crear-componentes-contextuales-tailwind', component: RebotonComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
