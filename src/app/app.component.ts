import { Component } from '@angular/core';
import './firebase/firebaseConfig.js'; // obtener de https://console.firebase.google.com/u/0/project/gneh-fabo
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gneh';
}
