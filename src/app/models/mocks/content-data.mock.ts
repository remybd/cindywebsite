import {EntryButtonModel} from "../entry-button.model";
import {ContentModel} from "../content.model";
import {ContentImageModel} from "../content-image.model";
import {Mock} from "protractor/built/driverProviders";

export class ContentDataMock {

  static caisseEpargneImages: ContentImageModel[] = [
    new ContentImageModel("/assets/img/content/caisse-epargne/handball-600-x-800-homme-soutien-1.png",
      "Affiche soutien Homme"),
    new ContentImageModel("/assets/img/content/caisse-epargne/ce-handball-l-equipe-254-x-336-mm-handball-homme-victoire.png",
      "Affiche en cas de victoire Homme"),
    new ContentImageModel("/assets/img/content/caisse-epargne/ce-handball-l-equipe-le-parisien-254-x-336-mm-3.png",
      "Affiche en cas de victoire Femme"),
  ];
  static caisseEpargne: ContentModel = new ContentModel(
    "Caisse d'épargne - supporter officiel de l'équipe de France de Handball",
    "Création de l'affiche pour la coupe du monde de handball homme et femme",
    "CR : Jeanne Teissier / Photographe maillot : David Meignan / Photographe femmes : Etienne Garnier",
    ContentDataMock.caisseEpargneImages
  );





  static contentDataDic = {
    "caisse-epargne": ContentDataMock.caisseEpargne
  }

}
