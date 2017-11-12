import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MarketService} from "../../services/market/market.service";
import {AppUsersService} from "../../services/app-users/app-users.service";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

    markets;
    selectedMarket;

    userSearch;
    usersOriginal;
    users;
    selectedUser;

    constructor(
        private marketService: MarketService,
        private appUsersService: AppUsersService
    ) { }

    selectUser( user ){
        this.selectedUser = user;
        this.filterUsers(user.name);
    }

    filterUsers( search ){
        search = search.toLowerCase();
        this.users = this.usersOriginal.filter( user => {
            return user.name.toLowerCase().includes(search);
        })
    }

    ngOnInit() {
        this.marketService.all()
            .subscribe(data => {
                this.markets = data;
                this.selectedMarket = data[0];
            });
        this.appUsersService.all()
            .subscribe(data => {
                this.usersOriginal = data;
                this.users = data;
            })
    }

}
