import { Categorie } from '../categorie/categorie';

export class Typetravail {

    Idtypetravail: number;
    Nomtype: String;
    categorie: Categorie;

    constructor(Idtypetravail: number, Nomtype: String, categorie: Categorie) {
        this.Idtypetravail = Idtypetravail;
        this.Nomtype = Nomtype;
        this.categorie = categorie;

    }
}
