import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, EventEmitter, Output, ɵConsole } from '@angular/core';

@Component({
  selector: 'vrl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges  {

  @Input() label = '';
  @Input() iconbtn = '';
  @Input() loading = false;
  @Input() disabled: boolean;

  @Output() clicked = new EventEmitter<any[]>();

  iconInit = 'undefined';
  public disablebtn = '';

  constructor() { }

  ngOnInit() {

    console.log(this.disabled);

    if (!this.label || this.label === '') {
      this.label = 'empty';
    }

    if (!this.iconbtn || this.iconbtn === '') {
      this.iconbtn = 'undefined';
    } else {
      this.iconInit = this.iconbtn;
    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let property in changes) {

      if (property === 'loading' ) {

        if ( changes[property].currentValue === 'true' &&  changes[property].previousValue === 'false') {
          this.iconbtn = 'pi pi-spin pi-spinner';
        } else if ( changes[property].currentValue === 'false' &&  changes[property].previousValue === 'true'){
          this.iconbtn =  this.iconInit;
        }

      } else  if (property === 'disabled' ) {

        if ( changes[property].currentValue === 'true') {

          this.disablebtn = 'disable';
        } else if ( changes[property].currentValue === 'false') {

          this.disablebtn = '';
        }

      }

    }

  }

  handleClick(event): void {

    this.clicked.emit(event);

  }



}
