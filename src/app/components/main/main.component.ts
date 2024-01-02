import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  scene: number = 0;
  direction: number = 1;
  source = interval(10000);
  subscription!: Subscription;

  constructor(private router: Router){}

  toHome() {
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.subscription = this.source.subscribe(val => this.changeBackground());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeBackground() {
    if(this.scene === 2 && this.direction === 1) this.direction = -1;
    if(this.scene === 0 && this.direction === -1) this.direction = 1;
    this.scene = this.scene + this.direction;
  }

}
