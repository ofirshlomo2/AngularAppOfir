import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NavBarComponent} from './component/nav-bar/nav-bar.component'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon"
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddOpperationComponent } from './component/add-opperation/add-opperation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    AddOpperationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
