import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/Composant/categorie/categorie';
import{RestService}from'src/app/Services/rest.service';
@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {
  categ:Categorie
  constructor(public Rest:RestService, public router:Router) { }
  ngOnInit(): void {
    this.Listercategorie();
  }
  Listercategorie() {
    this.Rest.Getallcategorie().subscribe(data => {
        this.categ = data;
        console.log(data);
    }, err => { console.log(err); }
    )

}

}
