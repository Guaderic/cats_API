import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICat,  ICatDetailsInfo} from "../interfaces";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient:HttpClient) { }
  private url = 'https://api.thecatapi.com/v1/images/search?breed_ids='

  getCats(page:number, limit: string):Observable<ICat[]>{
    return this.httpClient.get<ICat[]>(urls.cats + '&limit='+ limit +'&page=' + page)
  }

  getCatByID(id:string):Observable<ICatDetailsInfo[]>{
    return this.httpClient.get<ICatDetailsInfo[]>(this.url + id)
  }
}
