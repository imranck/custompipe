import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common.interceptor';
import{TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslationService } from './translation.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    // }
    // }),

    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true},
    HttpClient,
    {provide:TranslationService}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
