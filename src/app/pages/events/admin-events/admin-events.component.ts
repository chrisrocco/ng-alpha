import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EventsService} from "../../../events/events.service";

@Component({
    selector: 'app-admin-events',
    templateUrl: './admin-events.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AdminEventsComponent implements OnInit {

    constructor(private eventsService: EventsService) {
    }

    ngOnInit() {
        this.eventsService.all()
            .subscribe(
                data => {
                    console.log(data);
                },
                err => {
                    alert("something went wrong");
                    console.log(err);
                }
            );
    }

}
