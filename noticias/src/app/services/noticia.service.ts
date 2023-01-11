import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais + 
      '&category=' + parametros.categoria + '&apiKey=' + '209d6ed5adcd461a8ae61a4c976b6da2'
    
    return this.http.get(URL);
  }
}
