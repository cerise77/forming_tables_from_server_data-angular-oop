import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Table} from './table';

@Injectable()
export class HttpService{


    constructor(private http: HttpClient){ }

    getData(){

      return this.http.post('http://placeme.dk.linux66.unoeuro-server.com/rosi_test/includes/draw_table.php', {command: "save", table: "sports"})

    }
}
