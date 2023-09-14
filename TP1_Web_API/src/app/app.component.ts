import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie';

constructor (public http:HttpClient) {}
  request():void{
    const headers = new HttpHeaders({
      // 'X-RapidAPI-Key': 'e114051b0f733d6a7ec36cb7032b109d',
      // 'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    });
      this.http.get<any>("https://api.themoviedb.org/3/movie/157336?api_key=e114051b0f733d6a7ec36cb7032b109d&append_to_response=videos", { headers: headers })
      .subscribe(x =>
      console.log(x));
  

    }

    }

