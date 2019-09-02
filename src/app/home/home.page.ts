import { Component, OnInit } from '@angular/core';
import { BanksService } from '../api/banks.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  CITIES = ['BANGALORE', 'MUMBAI', 'CHENNAI'];
  city = 'BANGALORE';
  search = '';
  searchResults = [];
  constructor(private bankService: BanksService) { }

  ngOnInit() {
    this.changeCity();
  }

  changeCity(event?) {
    this.bankService.getBanks(this.city).subscribe((response: any) => {
      this.searchResults = response;
    });

  }
}
