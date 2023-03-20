import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  URL =  environment.URL + '/estu/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.URL + `detail/${id}`);
  } 

  public save(estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', estudio);
  }

  public update(id: number, estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, estudio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}