import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

    navs: string[] = [
        "Home",
        "About",
        "Contact"
    ];

    public boxAction = (evt) => {
        console.log(evt);
        let box = evt.target.children[0];
        let change = () => {
            if (evt.type === 'mouseenter') {
                box.style.height = '2px';
                box.style.width = '100%';
                box.addEventListener("transitionend", () => {
                    box.style.height = '100%';
                }, false);
                box.removeEventListener("transitionend", () => {
                }, false);
            } else if (evt.type === 'mouseleave') {
                box.style.height = '0';
            }
        }
        change();
    }

    constructor() {
    }

    ngOnInit() {
    }

}
