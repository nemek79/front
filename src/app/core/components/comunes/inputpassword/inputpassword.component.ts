import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vrl-inputpassword',
  templateUrl: './inputpassword.component.html',
  styleUrls: ['./inputpassword.component.css']
})
export class InputpasswordComponent implements OnInit {

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
