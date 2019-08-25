import {ContentPageModel} from '../content/models/content-page.model';
import {ContentImageModel} from '../content/models/content-image.model';
import {ContentBlockModel} from '../content/models/content-block.model';
import {ContentMosaicModel} from '../content/models/content-mosaic.model';
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
  static nikonSearchMosaicImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/nikon/search_jungle_652x461.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_snow_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_mountain_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_sun_652x461.png', ''),
  ];
  static nikonBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/nikon/tote-bag-1_1212x756.png',
      ''),
    new ContentMosaicModel(ContentDataMock.nikonSearchMosaicImages, "Recherches")
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





  //en mouvement
  static enMouvementMosaicImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-1-919x576.png', ''),
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-2-918x576.png', ''),
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-3-919x577.png', ''),
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-4-918x577.png', ''),
  ];

  static enMouvementBlocks: ContentBlockModel[] = [
    new ContentImageModel("/assets/img/content/en-mouvement/web-bel-ami-cover-1256x659.png"),
    new ContentImageModel("/assets/img/content/en-mouvement/we-blivre-df-copie-1256x659.png"),
    new ContentImageModel("/assets/img/content/en-mouvement/pages-1256x659.png"),
    new ContentMosaicModel(ContentDataMock.enMouvementMosaicImages)
  ];
  static enMouvement: ContentPageModel = new ContentPageModel(
    'EN MOUVEMENT - maison d\'édition',
    'Création d\'une maison d\'édition. ' +
    'Identité visuelle et charte graphique',
    '',
    ContentDataMock.enMouvementBlocks
  );




  // crazy Horse
  static crazyHorseBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/crazy-horse/crazy-horse-recto-868x581.png'),
    new ContentImageModel('/assets/img/content/crazy-horse/crazy-horse-verso-879x586.png')
  ];
  static crazyHorse: ContentPageModel = new ContentPageModel(
    'CRAZY HORSE - Carte de voeux 2018',
    '',
    'Agence : Hub ID&Napoli',
    ContentDataMock.crazyHorseBlocks
  );



  // nuit de l'eau
  static nuitEauBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/nuit-eau/image-affiche-la-nuit-de-l-eau-587x830.png'),
    new ContentImageModel('/assets/img/content/nuit-eau/image-la-nuit-de-l-eau-abribus-1101x830.png'),
    new ContentImageModel('/assets/img/content/nuit-eau/image-capture-d-e-cran-2019-1101x830.png'),
    new ContentImageModel('/assets/img/content/nuit-eau/image-tote-bag-la-nuit-de-l-eau-597x830.png')
  ];
  static nuitEau: ContentPageModel = new ContentPageModel(
    'UNICEF - la nuit de l\'eau',
    'Création de l\'affiche pour la 10ème édition de la Nuit de l\'Eau.',
    'En partenariat avec l\'ECV',
    ContentDataMock.nuitEauBlocks
  );



//----------------------------------------------------------------------------------------------------------------


  static contentDataDic = {
    'caisse-epargne': ContentDataMock.caisseEpargne,
    'nikon': ContentDataMock.nikon,
    'abbe-pierre': ContentDataMock.abbePierre,
    'en-mouvement': ContentDataMock.enMouvement,
    'crazy-horse': ContentDataMock.crazyHorse,
    'nuit-eau': ContentDataMock.nuitEau
  };

}
