import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { IMovie } from '../model/imovie';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  moviedata : IMovie[] = []

  //Inject MovieService in component
  constructor(private ms : MovieserviceService) { 
    this.ms.getAllMovies().subscribe(data => { this.moviedata.push(...data)}) //Subscribing to data received from the service
    console.log(this.moviedata)
   }

  ngOnInit() {
  }

}
