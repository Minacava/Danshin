import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public houses: any = [];
  public propDis: any  = [];
  constructor(
    private _propertiesService: PropertiesService) { }

  ngOnInit() {
    this.getDataInfo();
    this.selectTheFavorite();
  }

getDataInfo() {
    this._propertiesService.getTheProp().subscribe(
      result => {
        this.propDis = result.response.listings;
        console.log( this.propDis);

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

