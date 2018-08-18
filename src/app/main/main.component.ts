import { Component, OnInit } from '@angular/core';
import { ServerConnectorService } from "../_services/server-connector.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: any;
  constructor(private service: ServerConnectorService) { }

  ngOnInit() {
    this.service.getData()
        .subscribe(
            (d) => {
              this.data = d;
            }
        )
  }

}
