import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'vrl-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // items: MenuItem[];

  public iconBtn = 'pi pi-cloud';
  public label = 'test button';
  public loadValue:boolean = false;

  constructor() { }

  ngOnInit() {
    
  //   this.items = [
  //     {label: 'Update', icon: 'pi pi-refresh', command: () => {
  //         this.update();
  //     }},
  //     {label: 'Delete', icon: 'pi pi-times', command: () => {
  //         this.delete();
  //     }},
  //     {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
  //     {separator: true},
  //     {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  // ];

  }

  handleClick(event) {

    console.log('clicked')
    this.loadValue = !this.loadValue;

  }

}
