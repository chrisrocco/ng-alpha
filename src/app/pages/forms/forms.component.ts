import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MarketService} from "../../services/market/market.service";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

    markets;
    selectedMarket;

    users;
    selected;

    constructor(private marketService: MarketService) { }

    ngOnInit() {
        this.marketService.all()
            .subscribe(data => {
                this.markets = data;
                this.selectedMarket = data[0];
            });
    }

}
