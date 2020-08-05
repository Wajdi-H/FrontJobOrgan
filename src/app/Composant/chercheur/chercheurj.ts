import { Preferance } from '../preferance/preferance';

export class Chercheurj {

    idC: number;
    Prenom: String;
    Nom: String;
    DateNaissance: Date;
    Ville: String;
    NumSecSoc: number;
    Nationalite: String;
    Email: String;
    Telephone: number;
    Codepostale: number;
    PaysResidance: String;
    preferance: Preferance



    constructor(idC: number, Prenom: String,
        Nom: String, DateNaissance: Date, Ville: String,
        NumSecSoc: number, Nationalite: String, Email: String,
        Telephone: number, Codepostale: number, PaysResidance: String
        , preferance: Preferance) {
        this.idC = idC;
        this.Prenom = Prenom;
        this.Nom = Nom;
        this.DateNaissance = DateNaissance;
        this.Ville = Ville;
        this.NumSecSoc = NumSecSoc;
        this.Nationalite = Nationalite;
        this.Email = Email;
        this.Telephone = Telephone;
        this.Codepostale = Codepostale;
        this.PaysResidance = PaysResidance;
        this.preferance = preferance;
    }
}

