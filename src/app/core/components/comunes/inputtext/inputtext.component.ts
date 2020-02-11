import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vrl-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {

  @Input() label = '';
  @Input() model = '';
  @Input() id = '';
  @Input() icon = '';
  @Input() error: boolean = false;

  @Output() value = new EventEmitter<any[]>();

  public classes = '';

  constructor() { }

  ngOnInit() {

    console.log('error: '+ this.error)

  }

  handleChange(event) {
    this.value.emit(event);
  }

}
