import { Component, OnInit } from '@angular/core';
import { IMovie } from '../model/imovie';
import { MovieserviceService } from '../services/movieservice.service';
import { Router } from '@angular/router';
import { Idetails } from '../model/idetails';

@Component({
  selector: 'app-createdetails',
  templateUrl: './createdetails.component.html',
  styleUrls: ['./createdetails.component.css']
})
export class CreatedetailsComponent implements OnInit {

  detailsdata : Idetails = {detailid : 0, actor : '', movieid : 0, gender : '', role : ''}
  showdata : any[] = []

  constructor(private ms : MovieserviceService, private router : Router) { }

  savedata(data : Idetails) : void {
    this.detailsdata = data
    this.ms.addDetails(this.detailsdata).subscribe(
      () => {
        alert("Record Added")
        this.router.navigate(['/listmovies'])
      }
    )
  }

  ngOnInit() {
    this.ms.getAllMovies().subscribe(data => {this.showdata.push(...data)})
  }

}
