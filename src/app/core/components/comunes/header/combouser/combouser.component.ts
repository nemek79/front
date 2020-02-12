import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vrl-combouser',
  templateUrl: './combouser.component.html',
  styleUrls: ['./combouser.component.css']
})
export class CombouserComponent implements OnInit {

  @Input() label = '';
  @Input() info: any;
  @Input() menalignright = false;
  @Input() icon: string;

  @Output() selectedoption = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {


  }

  cerrarSesion() {
    console.log('=========> combouser.cerrarSesion');
    this.selectedoption.emit(['close_session']);
  }

}
