import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuilderComponent } from './components/builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormPreviewComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
