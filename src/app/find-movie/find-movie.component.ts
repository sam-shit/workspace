import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../model/imovie';

@Component({
  selector: 'app-find-movie',
  templateUrl: './find-movie.component.html',
  styleUrls: ['./find-movie.component.css']
})
export class FindMovieComponent implements OnInit {

  constructor(private ms : MovieserviceService, private ar : ActivatedRoute, private router : Router) { }

  moviedata : IMovie
  id : number

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.ms.getMovie(this.id).subscribe((data : IMovie) => {
      this.moviedata = data
      console.log(this.moviedata)
    })


  }

  Show() {
    this.router.navigate(['/listmovies'])
  }

}
