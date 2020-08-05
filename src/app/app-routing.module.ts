import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoblistComponent } from './joblist/joblist.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
 
  { path: 'Home', component: HomeComponent },
  { path: 'ListJobs', component: JoblistComponent },
  { path: 'Menu', component: MenuComponent },
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
