import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class allEmployeeService {
  constructor(private httpClient: HttpClient) {}
}
