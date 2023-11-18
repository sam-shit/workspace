import { Component, OnInit } from '@angular/core';
import { IMovie } from '../model/imovie';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieserviceService } from '../services/movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  moviedata : IMovie

  constructor(private fb : FormBuilder, private ms : MovieserviceService, private route : Router) { }
  movieform = this.fb.group({
    name : ['', Validators.required],
    yearRelease : ['', [Validators.min(2000), Validators.max(2023)]],
    rating : ['', [Validators.required, Validators.min(1), Validators.max(5)]]
  })

  savedata() : void {
    this.moviedata = this.movieform.value
    if (this.moviedata.rating > 5) {
      alert('Error in rating')
      return
    }

    console.log(this.moviedata)
    this.ms.addMovie(this.moviedata).subscribe(
      () => {
        alert('Record Added')
        this.route.navigate(['/listmovies'])
      }
    )
  }

  ngOnInit() {
  }

}
