import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponseBase } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}