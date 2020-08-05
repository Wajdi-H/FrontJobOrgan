import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Mission } from './../Composant/mission/mission';
import{RestService}from'src/app/Services/rest.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  missions: any;
  unemission: Mission;
  constructor( private Rest: RestService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
  
  }

  saveClass() {
    this.Rest.AddMission(this.unemission).subscribe(
      response => {
        this.route.navigate(['/classe']);
      }
    );
    }

}
