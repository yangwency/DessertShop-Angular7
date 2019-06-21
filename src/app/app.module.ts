import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { CartComponent } from './cart/cart.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { DataService } from './data.service';
import { CartService } from './cart.service';
import { SuccessorderComponent } from './successorder/successorder.component';
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CartComponent,
    FiltersComponent,
    ProductThumbnailComponent,
    SearchBarComponent,
    ShowcaseComponent,
    SortFiltersComponent,
    UrlFormComponent,
    SuccessorderComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
