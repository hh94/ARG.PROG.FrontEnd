import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {

  expURL =  environment.URL + '/conocimiento/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.expURL + `detail/${id}`);
  } 

  public save(conocimiento: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', conocimiento);
  }

  public update(id: number, conocimiento: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, conocimiento);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}