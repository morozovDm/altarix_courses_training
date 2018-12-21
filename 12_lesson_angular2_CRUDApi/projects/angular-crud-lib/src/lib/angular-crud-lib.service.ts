import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, catchError, partition } from 'rxjs/operators';
interface ServerResponse {
  token: string;
  status: number;
  error?: string;
  code?: number;
}

export const partitionByErrorCode = partition((error: any) => error.status !== undefined && error.status !== 200);
@Injectable({
  providedIn: 'root'
})
export class AngularCrudService {

  protected baseUrl = 'http://jsonplaceholder.typicode.com';
  protected endPoint: string;

  constructor(private http: HttpClient) { }

  getAll<T>(): [Observable<ServerResponse>, Observable<T>] {
    const [error$, data$] = partitionByErrorCode(
      this.http.get(`${this.baseUrl}/${this.endPoint}`)
        .pipe(share(), catchError((error) => of(error)))
    );
    return [error$, data$] ;
  }
  get<T>(id: number): [Observable<any>, Observable<T>] {
    const [error$, data$] = partitionByErrorCode(
      this.http.get(`${this.baseUrl}/${this.endPoint}/${id}`)
        .pipe(share(), catchError((error) => of(error)))
    );
    return [error$, data$] ;
  }
  add<T>(data: any): [Observable<any>, Observable<T>] {
    const [error$, data$] = partitionByErrorCode(
      this.http.post(`${this.baseUrl}/${this.endPoint}/${data.id}`, data)
        .pipe(share(), catchError((error) => of(error)))
    );
    return  [error$, data$ ];
  }
  update<T>(data: any): [Observable<any>, Observable<T>] {
    const [error$, data$] = partitionByErrorCode(
      this.http.put(`${this.baseUrl}/${this.endPoint}/${data.id}`, data)
        .pipe(share(), catchError((error) => of(error)))
    );
    return [error$, data$];
  }

  delete<T>(id: number): Observable<any> {
    const [error$, data$] = partitionByErrorCode(
      this.http.delete(`${this.baseUrl}/${this.endPoint}/${id}`)
        .pipe(share(), catchError((error) => of(error)))
    );
    return error$;
  }
}
