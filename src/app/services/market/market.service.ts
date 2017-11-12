import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class MarketService {

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get( environment.api + "/markets" );
  }

}
