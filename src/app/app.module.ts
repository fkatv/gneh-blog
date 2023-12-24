import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UxModule } from './ux/ux.module';
import { MainComponent } from './components/main/main.component';
import { RebotonComponent } from './components/blog/reboton/reboton.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RebotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
