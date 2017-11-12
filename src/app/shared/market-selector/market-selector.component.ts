import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MarketService} from "../../services/market/market.service";

@Component({
  selector: 'app-market-selector',
  templateUrl: './market-selector.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MarketSelectorComponent implements OnInit {

  @Output() onMarketSelect = new EventEmitter();

  markets;
  selectedMarket;

  constructor(private marketService: MarketService) { }

  marketChanged(){
    this.onMarketSelect.emit(this.selectedMarket);
  }

  ngOnInit() {
      this.marketService.all()
          .subscribe(data => {
              this.markets = data;
              this.selectedMarket = data[0];
              this.onMarketSelect.emit(this.selectedMarket);
          });
  }

}
