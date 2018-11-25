import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  public url: string;
  public zwsid: string;
  public key: string;
  public city: string;
  public jsonObject: any;
  public results: string;
  constructor(
  public _http: HttpClient

  ) {

    // tslint:disable-next-line:max-line-length
    this.url = 'http://api.nestoria.co.uk/api?country=uk&action=search_listings&encoding=json&listing_type=buy&place_name=';
    this.city = 'london';
    this.results = '&number_of_results="3"';
}

getTheProp(): Observable<any> {
  return this._http.get(this.url + this.city );
   }
}
