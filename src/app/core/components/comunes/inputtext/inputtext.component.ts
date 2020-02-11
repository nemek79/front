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

  @Output() value = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {


  }

  handleChange(event) {
    this.value.emit(event);
  }


}
