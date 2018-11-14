import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  public url: string;
  public zwsid: string;
  public city: string;
  constructor(
    public _http: HttpClient

  ) {
    this.url = ' http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?';
    this.zwsid = 'X1-ZWz1gr1g0brvuz_13bwv';
    this.city = 'Seattle';
}

getTheProp(): Observable<any> {
  return this._http.get(this.url + this.zwsid + this.city);
    console.log ( 'servicio listo');
   }
}
