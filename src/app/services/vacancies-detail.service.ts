import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VacanciesDetailService {

  constructor( private httpClient:HttpClient) { }

  public vacant_Api_Url = 'assets/json/vacancies.json'
  getVacantData(){
    return this.httpClient.get<any>(this.vacant_Api_Url)

  }
}
