import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './../Composant/mission/mission';
import{RestService}from'src/app/Services/rest.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
mission:Mission;
  constructor(public Rest:RestService, public router:Router) { }


  ngOnInit(): void {
    this.ListerMission();
  }
  ListerMission() {
    this.Rest.GetallMsiion().subscribe(data => {
        this.mission = data;
        console.log(data);
    }, err => { console.log(err); }
    )

}

DeleteMission(id:number)
  {
    let conf=confirm("etes Vous Sure ? ");
    if(conf)
    this.Rest.DeleteMission(id).subscribe(data=>{
      this.ListerMission();
    })

  }

  PostulerMission(id:number)
  {
    this.router.navigate(['/Candidature/'+id]);
  }
}
