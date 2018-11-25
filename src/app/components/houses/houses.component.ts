import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
declare var $: any;

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public houses: any = [];
  public count: number;

  constructor(
    private _propertiesService: PropertiesService ) { }
    ngOnInit() {
    this.selectTheFavorite();
    this._propertiesService.getTheProp().subscribe(
      result => {
        this.houses = result.response.listings;
        console.log( this.houses);

      },
      error => {
        console.log(<any>error);
      }
    );

  }
  selectTheFavorite() {
    $('i').click(function() {
      $(this).toggleClass('container-icon-heart');

    });
  }
}
