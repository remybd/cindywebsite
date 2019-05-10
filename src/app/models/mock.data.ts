import {EntryButtonModel} from "./entry-button.model";

export class MockData {
  static entryButtonVerresNikon: EntryButtonModel = new EntryButtonModel("Nikon Verres Optiques", "Totebag",
    "Illustration",
    "/assets/img/home/toteBagNikon@2x.png",
    "");

  static entryButtonTheErable: EntryButtonModel = new EntryButtonModel("Thé à l'érable", "Boite de Thé",
    "Packaging",
    "/assets/img/home/theErable@2x.png",
    "");

  static entryButtonCentrePompidou: EntryButtonModel = new EntryButtonModel("Centre Pompidou", "Brochure",
    "Édition",
    "/assets/img/home/centrePompidou@2x.png",
    "");

  static entryButtonCaisseEpargne: EntryButtonModel = new EntryButtonModel("Caisse d'Épargne", "Handball",
    "Affiche et déclinaison",
    "/assets/img/home/caisseEpargneHandball@2x.png",
    "");

  static entryButtonRadioCanada: EntryButtonModel = new EntryButtonModel("Ici radio Canada", "Affiches",
    "Affiches",
    "/assets/img/home/radioCanadaStructureEtVariation@2x.png",
    "");

  static entryButtonAmbigu: EntryButtonModel = new EntryButtonModel("Ambigü", "Magazine",
    "Édition",
    "/assets/img/home/ambigu@2x.png",
    "");

  static entryButtonEpiderme: EntryButtonModel = new EntryButtonModel("Épiderme", "Magazine",
    "Édition",
    "/assets/img/home/epiderme@2x.png",
    "");

  static entryButtonEnMouvement: EntryButtonModel = new EntryButtonModel("En mouvement", "Maison d'édition",
    "Identité visuelle",
    "/assets/img/home/enMouvementBelAmiCover@2x.png",
    "");

  static entryButtonDentifrice: EntryButtonModel = new EntryButtonModel("3X/J", "Kit de dentifrice pour enfants",
    "Packaging",
    "/assets/img/home/dentifrice@2x.png",
    "");

  static entryButtonRencontresChoregraphie: EntryButtonModel = new EntryButtonModel("Rencontres chorégraphiques de sene saint-denis",
    "Affiches",
    "Affiches",
    "/assets/img/home/rencontreChoregraphieSeineSaintDenis@2x.png",
    "");


  static entryButtonArray = [
    MockData.entryButtonVerresNikon, MockData.entryButtonTheErable,
    MockData.entryButtonCentrePompidou, MockData.entryButtonCaisseEpargne,
    MockData.entryButtonRadioCanada, MockData.entryButtonAmbigu,
    MockData.entryButtonEpiderme, MockData.entryButtonEnMouvement,
    MockData.entryButtonDentifrice, MockData.entryButtonRencontresChoregraphie
  ]
}
