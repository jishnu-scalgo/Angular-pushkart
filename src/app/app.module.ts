import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../../src/app/frontpage/home/home.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { BaseComponent } from './frontpage/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontpageComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
