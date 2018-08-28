import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-message-banner',
    templateUrl: './message-banner.component.html',
    styleUrls: ['./message-banner.component.sass']
})
export class MessageBannerComponent implements OnInit {
    exclamation: boolean = false;
    write: string = '';
    public writeString = () => {
        let sentence: string = 'Carbon Neutral ';
        let count: number = 0;
        let timeOut = () => {
            setTimeout(() => {
                this.write = this.write + sentence.charAt(count);
                count = count + 1;
                count === sentence.length ? this.exclamation = true : timeOut();
            }, 80);
        };
        timeOut();
    };

    constructor() {
    }

    ngOnInit() {
        this.writeString();
    }

}
