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

  getKonto(id: number): Observable<Konto> {
    return this.httpClient.get<Konto>(environment.API_URL + 'konto/' + id);
  }

  insertKonto(konto: Konto): Observable<Object> {
    return this.httpClient.post(environment.API_URL + 'konto/', konto);
  }

  updateKonto(konto: Konto): Observable<Object> {
    return this.httpClient.put(environment.API_URL + 'konto/' + konto.id, konto);
  }

  deleteKonto(id: number): Observable<Object> {
    return this.httpClient.delete(environment.API_URL + 'konto/' + id);
  }
}
