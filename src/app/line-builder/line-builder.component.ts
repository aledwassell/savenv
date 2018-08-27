import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-line-builder',
    templateUrl: './line-builder.component.html',
    styleUrls: ['./line-builder.component.sass']
})
export class LineBuilderComponent implements OnInit {

    constructor() {
        this.processData(this.data)
    }

    public data: any[] = [
        "House",
        "Garden",
        "Boat"
    ]

    public randomCol = () => {
        let range = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        let r = () => range[Math.floor(Math.random() * (16 - 0) + 0)];
        return `#${r()}${r()}${r()}${r()}${r()}${r()}`;
    }

    public processData = (d) => {
        for(let i = 0; i < this.data.length; i++){
            this.data[i] = Array.from(this.data[i]);
        }
    }

    public colourChanger = (evt) => {
        let count = 0;
        let addColor = () => {
            setTimeout(() => {
                if(evt.target.children[count] && evt.type === 'mouseenter') {
                    evt.target.children[count].classList.add('green');
                    // evt.target.children[count].style.color = `${this.randomCol()}`;
                }else if(evt.target.children[count]){
                    evt.target.children[count].classList.remove('green');
                    // evt.target.children[count].style.color = '#000';
                };
                count = count + 1;
                addColor();
            }, 70);
        }
        addColor();
    }

    ngOnInit() {

    }

}