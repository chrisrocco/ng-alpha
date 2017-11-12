import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EventsService} from "../../../services/events/events.service";

declare let $: any;

@Component({
    selector: 'app-admin-events',
    templateUrl: './admin-events.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AdminEventsComponent implements OnInit {

    private static COLUMNS = [
        { title: 'Customer'},
        { title: 'Date'},
        { title: 'Name'},
        { title: 'Location'}
    ];

    private _dataTable;


    constructor(private eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.all()
            .subscribe(
                (data: Array<any> ) => {
                    this.initDataTable( this.process(data) );
                },
                err => {
                    alert("something went wrong");
                    console.log(err);
                }
            );
    }

    initDataTable( data ){
        this._dataTable = $('#example').DataTable({
            columns: AdminEventsComponent.COLUMNS,
            data: data,
            language: {
                searchPlaceholder: 'Search records',
                sSearch: '',
                sLengthMenu: 'Show _MENU_',
                sLength: 'dataTables_length',
                oPaginate: {
                    sFirst: '<i class="material-icons">chevron_left</i>',
                    sPrevious: '<i class="material-icons">chevron_left</i>',
                    sNext: '<i class="material-icons">chevron_right</i>',
                    sLast: '<i class="material-icons">chevron_right</i>'
                }
            },
            dom: 'Bfrtip',
            buttons: [
                'colvis',
                'excel',
                'print'
            ]
        });
        $('.dataTables_length select').addClass('browser-default');
    }

    private process ( events ){
        events.map( event => {
                event.date = new Date( event.start_time );
            }).sort((a, b) => {
                if(a.date < b.date) return -1;
                if(a.date > b.date) return 1;
                return 0;
            });
        return events.map( event => {
            return [
                event.user.name,
                event.date.toDateString(),
                event.name,
                event.city + ', ' + event.state
            ]
        });
    }

}