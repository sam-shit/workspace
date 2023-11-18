import { Injectable } from '@angular/core';
import { IMovie } from '../model/imovie';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Idetails } from '../model/idetails';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private url = 'https://8080-addabcfedcbbadfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/Movie';
  private url2 = 'https://8080-addabcfedcbbadfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/Detail';

    // Inject HTTPCLIENT in services
  constructor(private httpclient : HttpClient) { } 
  getAllMovies() : Observable<IMovie[]> {
    return this.httpclient.get<IMovie[]>(`${this.url}/ListMovies`)
  }

  getMovie(id : number) : Observable<IMovie> {
    return this.httpclient.get<IMovie>(this.url + '/ListMovies/' + id).pipe(catchError(this.handleError))
  }

  httpOptions = {headers : new HttpHeaders({'Context-type' : 'application/json'})}
  
  addMovie(moviedata : IMovie) : Observable<IMovie> {
    return this.httpclient.post<IMovie>(this.url + '/AddMovie' , moviedata, this.httpOptions).pipe(catchError(this.handleError))
  }

  editMovie(moviedata : IMovie) : Observable<IMovie> {
    return this.httpclient.put<IMovie>(this.url + '/EditMovie/' + moviedata.id, moviedata, this.httpOptions).pipe(catchError(this.handleError))
  }

  deleteMovie(id : number) : Observable<IMovie> {
    return this.httpclient.delete<IMovie>(this.url + '/DeleteMovie/' + id).pipe(catchError(this.handleError))
  }

  addDetails(detailsdata : Idetails) : Observable<Idetails> {
    return this.httpclient.post<Idetails>(this.url2 + '/AddDetails', detailsdata, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(error : HttpErrorResponse) {
    var errmsg = error.status + '\n' + error.statusText + '\n' + error.error
    alert(errmsg)
    return throwError(errmsg)
  }

  // showMovies() : Observable<any[]> {
  //   return this.httpclient.get<any[]>(this.url + '/showMovies')
  // }

}  
