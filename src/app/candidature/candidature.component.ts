import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Candidature } from './../Composant/candidature/candidature';
import{RestService}from'src/app/Services/rest.service';
@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
getedid:number=this.activeRoute.snapshot.params.id
  Candidature: any;
  @Input() Candidat ={ 
    budgetDemande: null,
    descCompetances: null,
    mission:null
    }

  constructor( private Rest: RestService, private router: Router, private route: Router, private activeRoute:ActivatedRoute,) { }

  ngOnInit(): void {
  }

  SaveCandiature() {
    this.Rest.Addcandidature(this.Candidat,this.getedid).subscribe(
      response => {
        this.route.navigate(['/Home']);
      }
    );
    }
  }