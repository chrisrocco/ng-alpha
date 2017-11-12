import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from "../../models/User";
import {AppUsersService} from "../../services/app-users/app-users.service";

@Component({
    selector: 'app-user-selector',
    templateUrl: './user-selector.component.html',
    encapsulation: ViewEncapsulation.None
})
export class UserSelectorComponent implements OnInit {

    @Output() onUserSelect = new EventEmitter<User>();
    @Output() onUserDeselect = new EventEmitter();

    selectedUser;
    usersOriginal;
    users;

    constructor(private appUsersService: AppUsersService) {}

    selectUser( user ){
        this.selectedUser = user;
        this.filterUsers(user.name);
        this.onUserSelect.emit(user);
    }

    deselectUser(){
        this.selectedUser = null;
        this.onUserDeselect.emit();
    }

    filterUsers( search ){
        search = search.toLowerCase();
        this.users = this.usersOriginal.filter( user => {
            return user.name.toLowerCase().includes(search);
        })
    }

    ngOnInit() {
        this.appUsersService.all()
            .subscribe(data => {
                this.usersOriginal = data;
                this.users = data;
            })
    }

}
