import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from './../Composant/mission/mission';
import{RestService}from'src/app/Services/rest.service';
import { Categorie } from '../Composant/categorie/categorie';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
mission:Mission;
categ:Categorie;
ListMission:Mission[];
flitredmission:Mission[];
  constructor(public Rest:RestService, public router:Router) { }


  ngOnInit() {
    this.ListerMission();
    this.Listercategorie();


  }
  ListerMission() {
    this.Rest.GetallMsiion().subscribe((data: any) => {
        this.ListMission = data;
        console.log(this.ListMission);
    }, err => { console.log(err); }
    )

}

//id:number
filtrerwithcategorie(id:number){
  //console.log("Hello !");
  console.log(this.ListMission);
 this.flitredmission=this.ListMission.filter(missi=>missi.categorie.idCateg==id);
console.log(this.flitredmission);
}


Listercategorie() {
  this.Rest.Getallcategorie().subscribe(data => {
      this.categ = data;
      console.log(data);
  }, err => { console.log(err); 
  })

  

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
