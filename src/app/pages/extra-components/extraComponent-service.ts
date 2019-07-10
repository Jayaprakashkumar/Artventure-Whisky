import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { whiskyDataList } from './list/list-interface';

@Injectable()
export class extraComponentService{
    constructor( private http: HttpClient){
    }

    getWhiskyData(){
        return this.http.get<whiskyDataList>("assets/data/whiskyData.json")
    }

    getBydealerData(){
        return this.http.get("assets/data/BydealerData.json")
    }
}