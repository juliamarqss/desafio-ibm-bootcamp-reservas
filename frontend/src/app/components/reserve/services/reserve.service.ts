import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Reserves } from '../models/reserve.model';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private matSnackBat: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.matSnackBat.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  findAllReserves(): Observable<Reserves[]> {
    return this.http.get<Reserves[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findReserveById(id: string): Observable<Reserves> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Reserves[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  createReserve(reserve: Reserves): Observable<Reserves> {
    return this.http.post<Reserves>(this.baseUrl, reserve).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateReserve(id: string, reserve: Reserves): Observable<Reserves> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Reserves>(url, reserve).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteReserve(id: string): Observable<Reserves> {
    const url = `${this.baseUrl}/${id}/cancelar`;
    return this.http.delete<Reserves>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
