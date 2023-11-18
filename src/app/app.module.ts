import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { FindMovieComponent } from './find-movie/find-movie.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { CreatedetailsComponent } from './createdetails/createdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    FindMovieComponent,
    MenuComponent,
    AddMovieComponent,
    EditmovieComponent,
    DeletemovieComponent,
    ReactFormComponent,
    CreatedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
