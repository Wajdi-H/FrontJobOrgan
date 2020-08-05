import { Categorie } from '../categorie/categorie';
import { Entreprise } from '../entreprise/entreprise';

export class Mission {

    idMission: number;
    TitreMission: String;
    Competances: String;
    Description: String;
    vehicule: String;
    accessoires: String;
    Categorie: Categorie
    Entreprise: Entreprise

    constructor(idMission: number, TitreMission: String, Competances: String,
        Description: String, vehicule: String, accessoires: String,
        Categorie: Categorie, Entreprise: Entreprise) {
        this.idMission = idMission;
        this.TitreMission = TitreMission;
        this.Competances = Competances;
        this.vehicule = vehicule;
        this.accessoires = accessoires;
        this.Categorie = Categorie;
        this.Entreprise = Entreprise;
        this.Description = Description;



    }

}
