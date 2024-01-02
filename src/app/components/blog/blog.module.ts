import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { RebotonComponent } from './reboton/reboton.component';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { UxModule } from '../../ux/ux.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LandingComponent,
    RebotonComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    UxModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent, pathMatch: 'full' },
      { path: 'blog/landing', component: LandingComponent },
      { path: 'blog/estrategias-para-crear-componentes-contextuales-tailwind', component: RebotonComponent },
    ]),
  ],
})
export class BlogModule { }
