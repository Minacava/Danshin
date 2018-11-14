import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(
    private _propertiesService: PropertiesService ) { }

  ngOnInit() {
  }

}
