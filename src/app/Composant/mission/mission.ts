import { Categorie } from '../categorie/categorie';
import { Entreprise } from '../entreprise/entreprise';

export class Mission {

    idMission: number;
    titreMission: String=null;
    competances: String=null;
    description: String=null;
    vehicule: String=null;
    accessoires: String=null;
    categorie: Categorie=null;
    entreprise: Entreprise=null;
    localisation:string;
    budget:number;



    constructor(idMission: number, titreMission: String, competances: String,
        description: String, vehicule: String, accessoires: String,
        categorie: Categorie, entreprise: Entreprise,localisation:string,
        budget:number
    ) {
        this.idMission = idMission;
        this.titreMission = titreMission;
        this.competances = competances;
        this.vehicule = vehicule;
        this.accessoires = accessoires;
        this.categorie = categorie;
        this.entreprise = entreprise;
        this.description = description;
        this.localisation = localisation;
        this.budget = budget;



    }

}
