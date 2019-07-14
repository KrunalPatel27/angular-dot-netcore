import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService{

    api: string = 'https://localhost:44327'
    constructor(private httpClient: HttpClient) {
    }

    getName<T>():Observable<T>{
        return this.httpClient.get<T>(`${this.api}/api/krunal`)
    }
}