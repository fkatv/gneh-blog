import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TEInitiatorComponent } from './teinitiator/teinitiator.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TEInitiatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TEInitiatorComponent
  ]
})
export class UxModule { }
