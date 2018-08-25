import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-message-banner',
    templateUrl: './message-banner.component.html',
    styleUrls: ['./message-banner.component.sass']
})
export class MessageBannerComponent implements OnInit {
    write: string = '';
    public writeString = () => {
        let sentence: string = 'Carbon Neutral ';
        let count = 0;
        let timeOut = () => {
            setTimeout(() => {
                this.write = this.write + sentence.charAt(count);
                console.log(this.write);
                count = count + 1;
                timeOut();
            }, 80)
        };
        setTimeout(() => {
            timeOut();
        }, 2000);
    };

    constructor() {
    }

    ngOnInit() {
        this.writeString();
    }

}
