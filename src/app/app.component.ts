import { Component,OnInit } from '@angular/core';
import { TranslationService } from './translation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'custpipe';
  detailsArray: any = [];
  lang: any;
  constructor(private http:HttpClient, public translationService: TranslationService) { }

  ngOnInit(): void {
    localStorage.setItem('lang','en')
    // const lang=localStorage.getItem('lang') ||'en';
    this.http.get('').subscribe((res) => {
      this.detailsArray = res
      console.log(this.detailsArray.results);

    })

  }

  changeLang(lang: any) {
    localStorage.setItem('lang',lang.value);
    window.location.reload();
    console.log(lang.value);
    

  }


}
