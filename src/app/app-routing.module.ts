import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { FindMovieComponent } from './find-movie/find-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { CreatedetailsComponent } from './createdetails/createdetails.component';


const routes: Routes = [
  {path : 'listmovies', component : ListMovieComponent},
  {path : 'find/:id', component : FindMovieComponent},
  {path : 'add', component : AddMovieComponent},
  {path : 'Edit/:id', component : EditmovieComponent },
  {path : 'ReactiveForm', component : ReactFormComponent},
  {path : 'details', component : CreatedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
