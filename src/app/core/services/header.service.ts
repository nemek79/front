import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    public visible: boolean;

    constructor() {
        this.visible = true;
    }

    public hide() {
        this.visible = false;
    }

    public show() {
        this.visible = true;
    }

    public toggle() {
        this.visible = !this.visible;
    }

}
