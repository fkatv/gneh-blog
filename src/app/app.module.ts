import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UxModule } from './ux/ux.module';
import { BlogModule } from './components/blog/blog.module';
import { LazyImgDirective } from './lazy-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LazyImgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    UxModule,
  ],
  exports: [UxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
