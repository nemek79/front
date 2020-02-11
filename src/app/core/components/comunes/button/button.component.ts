import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vrl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges  {

  @Input() label = '';
  @Input() iconBtn = '';
  @Input() loading = false;

  @Output() clicked = new EventEmitter<any[]>();

  iconInit = 'undefined';

  constructor() { }

  ngOnInit() {

    if (!this.label || this.label === '') {
      this.label = 'empty';
    }

    if (!this.iconBtn || this.iconBtn === '') {
      this.iconBtn = 'undefined';
    } else {
      this.iconInit = this.iconBtn;
    }

  }

  ngOnChanges(changes: SimpleChanges): void {


    for (let property in changes) {


      if (property === 'loading' ) {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
        if ( changes[property].currentValue === 'true' ) {
          console.log('spininnnng')
          this.iconBtn = 'pi pi-spin pi-spinner';
        } else {
          console.log('quieto')
          this.iconBtn =  this.iconInit;
        }

      }

    }

  }

  handleClick(event): void {

    this.clicked.emit(event);
  }



}
