import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(private ionHttp: HTTP, private http: HttpClient) { }

  getBanks(city) {
    return this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=${city}`);
  }
}
