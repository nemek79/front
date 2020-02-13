import { Component, OnInit, OnDestroy, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { ModelState } from 'src/app/core/models/modelshow';

// Fuente: https://medium.com/@asfo/creando-un-componente-de-barra-lateral-reutilizable-en-angular-9bb6e118063e

@Component({
  selector: 'vrl-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit, OnDestroy {

  @Input() id: string;
  @Input() title = '';

  constructor(
    public sidebarSRV: SidebarService,
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {

    this.renderer.setStyle(document.getElementById('mySidebar'), 'top', 
    document.getElementById('vrl-header').clientHeight + 'px');

    this.sidebarSRV.loaderState
    .subscribe((state: ModelState) => {
      if (state.show) {
        this.open();
      } else {
        this.close();
      }
    });

  }

  ngOnDestroy() {

  }

  public open(): void {

    this.renderer.setStyle(document.getElementById('mySidebar'), 'width', '250px');
    //this.renderer.setStyle(document.getElementById('vrl-header'), 'marginLeft', '250px');
    this.renderer.setStyle(document.getElementById('main'), 'marginLeft', '250px');

  }
  public close(): void {
    console.log('=========> closinggg')
    this.renderer.setStyle(document.getElementById('mySidebar'), 'width', '0');
    //this.renderer.setStyle(document.getElementById('vrl-header'), 'marginLeft', '0');
    this.renderer.setStyle(document.getElementById('main'), 'marginLeft', '0');
  }


}
