import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Konto } from '../domain/konto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  constructor(private httpClient: HttpClient) { }

  getAllKontos(): Observable<Konto[]> {
    return this.httpClient.get<Konto[]>(environment.API_URL + 'konto');
  }
}
