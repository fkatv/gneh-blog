import { Component } from '@angular/core';
import { Ripple,Tooltip,Collapse,Sidenav,Tab, initTE } from 'tw-elements';
@Component({
  selector: 'app-teinitiator',
  templateUrl: './teinitiator.component.html',
  styleUrls: ['./teinitiator.component.css']
})
export class TEInitiatorComponent {
  constructor() { }

  ngOnInit() {
    initTE({ Ripple,Tooltip,Collapse,Sidenav,Tab }, { allowReinits: true });
  }
  ngAfterViewInit() {
    initTE({ Collapse });
  }
  ngAfterViewChecked() {
    initTE({ Collapse });
  }
}
