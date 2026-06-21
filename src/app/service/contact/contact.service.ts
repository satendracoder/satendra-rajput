import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
     private readonly apiUrl =
    'http://localhost:8859/api/v1/contact';

  constructor(
    private http: HttpClient
  ) {}

  saveInquiry(payload: any): Observable<any> {
    debugger
    return this.http.post<any>(
      this.apiUrl,
      payload
    );
  }
}
