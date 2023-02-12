import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { HomeComponent } from './app/components/home/home.component';
import { LoginComponent } from './app/components/login/login.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { UserDataComponent } from './app/components/user-data/user-data.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    UserDataComponent,
    NotFoundComponent,
    AdminPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
