import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoblistComponent } from './joblist/joblist.component';
import { MenuComponent } from './menu/menu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { EditprofilComponent } from './editprofil/editprofil.component';
import { PostjobComponent } from './postjob/postjob.component';
import { AddprofilComponent } from './addprofil/addprofil.component';
import { DetaisjobComponent } from './detaisjob/detaisjob.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CandidatureComponent } from './candidature/candidature.component';
import { ListcategorieComponent } from './categorie/listcategorie/listcategorie.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoblistComponent,
    MenuComponent,
    SigninComponent,
    SignupComponent,
    ProfilComponent,
    EditprofilComponent,
    PostjobComponent,
    AddprofilComponent,
    DetaisjobComponent,
    CandidatureComponent,
    ListcategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
