import {ContentPageModel} from '../content/models/content-page.model';
import {ContentImageModel} from '../content/models/content-image.model';
import {ContentBlockModel} from '../content/models/content-block.model';
import {ContentSearchModel} from '../content/models/content-search.model';
import {ContentVideoModel} from '../content/models/content-video.model';

export class ContentDataMock {

  // caisse epargne
  static caisseEpargneBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/caisse-epargne/handball-600-x-800-homme-soutien-1.png',
      'Affiche soutien Homme'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-254-x-336-mm-handball-homme-victoire.png',
      'Affiche en cas de victoire Homme'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-le-parisien-254-x-336-mm-3.png',
      'Affiche en cas de victoire Femme'),
  ];
  static caisseEpargne: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - supporter officiel de l\'équipe de France de Handball',
    'Création de l\'affiche pour la coupe du monde de handball homme et femme',
    'CR : Jeanne Teissier / Photographe maillot : David Meignan / Photographe femmes : Etienne Garnier',
    ContentDataMock.caisseEpargneBlocks
  );


  //nikon
  static nikonSearchImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/nikon/search_jungle_652x461.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_snow_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_mountain_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_sun_652x461.png', ''),
  ];
  static nikonBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/nikon/tote-bag-1_1212x756.png',
      ''),
    new ContentSearchModel(ContentDataMock.nikonSearchImages)
  ];
  static nikon: ContentPageModel = new ContentPageModel(
    'Nikon - Illustration pour totebag',
    'Illustrations pour un totebag nikon.',
    'Agence : Altmann + Pacreau',
    ContentDataMock.nikonBlocks
  );


  //abbe pierre
  static abbePierreBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/abbe-pierre/PICS_DOR.mp4',
      ''),
  ];
  static abbePierre: ContentPageModel = new ContentPageModel(
    'FONDATION ABBÉ PIERRE - les pics d’or',
    'Montage vidéo pour la cérémonie de remise des prix des Pics D’or : ' +
    'cérémonie visant à dénoncer les pires dispositifs anti-SDF.',
    '',
    ContentDataMock.abbePierreBlocks
  );


  static contentDataDic = {
    'caisse-epargne': ContentDataMock.caisseEpargne,
    'nikon': ContentDataMock.nikon,
    'abbe-pierre': ContentDataMock.abbePierre
  };

}
