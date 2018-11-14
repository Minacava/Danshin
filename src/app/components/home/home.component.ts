import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Prop: any = [];
  constructor(
    private _propertiesService: PropertiesService) { }

  ngOnInit() {
    // this.getDataInfo();
  }

  getDataInfo() {
    this._propertiesService.getTheProp().subscribe(
      result => {
        console.log(result);

      },
      error => {
        console.log(<any>error);
      }
);
    }
}
