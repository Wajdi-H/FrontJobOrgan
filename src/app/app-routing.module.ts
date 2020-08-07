import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { CandidatureComponent } from './candidature/candidature.component';
import { ListcategorieComponent } from './categorie/listcategorie/listcategorie.component';
const routes: Routes = [
 
  { path: 'Home', component: HomeComponent },
  { path: 'ListJobs', component: JoblistComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'edit-profil', component: EditprofilComponent },
  { path: 'post-job', component: PostjobComponent },
  { path: 'add-profil', component: AddprofilComponent },
  { path: 'job-detais', component: DetaisjobComponent },
  { path: 'Candidature/:id', component: CandidatureComponent },
  { path: 'listercategorie', component: ListcategorieComponent },


  {path: '', redirectTo: 'Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
