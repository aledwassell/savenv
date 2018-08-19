import {Component, OnInit} from '@angular/core';
import {ServerConnectorService} from "../_services/server-connector.service";
import {Data} from "../_interfaces/data";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    data: Data[];
    dataForm = new FormGroup({
        type: new FormControl(''),
        amount: new FormControl('')
    });
    constructor(private service: ServerConnectorService) {
    }

    onSubmit(): void {
        this.service.sendData(this.dataForm.value)
            .subscribe((d) => {
                console.log(d)
                this.data.push({this.dataForm.value});
                this.dataForm.reset();
            })
    }
    getData(): void {
        this.service.getData()
            .subscribe(d => this.data = d);
    }

    remove(id): void {
        this.service.delete()
    }

    ngOnInit() {
        this.getData();
    }

}
