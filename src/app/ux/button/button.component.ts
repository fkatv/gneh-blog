import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TEInitiatorComponent } from '../teinitiator/teinitiator.component';

@Component({
  selector: 'ux-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends TEInitiatorComponent {
  @ViewChild("svg") svg!: ElementRef;
  @Input() options!: {
    texto: string,
    click: any,
    contexto: any,
    color: string,
    uppercase: boolean,
    svg: string|null; //es el nombre del archivo ubicado en assets/img/...
  };

  override ngOnInit(): void {
      if (!this.options.click) {
        this.options.click = this.nadi;
      }
  }

  nadi() {
    alert('no hace nada.')
  }

  isUppercase(){
    return this.options?.uppercase;
  }

  isSecondary(): boolean {
    return this.options?.color == 'secondary';
  }

  isPrimary(): boolean {
    return this.options?.color == 'primary';
  }

  isTerciary(): boolean {
    return this.options?.color == 'tertiary';
  }

  isSecondaryOutlined(): boolean {
    return this.options?.color == 'secondary outlined';
  }

  isPrimaryOutlined(): boolean {
    return this.options?.color == 'primary outlined';
  }


}
