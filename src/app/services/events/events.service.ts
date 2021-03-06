import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class EventsService {

    constructor(private http: HttpClient) {}

    all() {
        return this.http.get(environment.api + "/events", {
            params: {
                "with": "user"
            }
        });
    }

}
