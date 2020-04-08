import {ContentPageModel} from '../content/models/content-page.model';
import {ContentImageModel} from '../content/models/content-image.model';
import {ContentBlockModel} from '../content/models/content-block.model';
import {ContentSearchModel} from '../content/models/content-search.model';
import {ContentVideoModel} from '../content/models/content-video.model';
import {ContentLegendModel} from '../content/models/content-legend.model';

export class ContentDataMock {

  // caisse epargne
  static caisseEpargneHandballBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/caisse-epargne/handball-600-x-800-homme-soutien-1.png',
      'Affiche soutien Homme'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-254-x-336-mm-handball-homme-victoire.png',
      'Affiche en cas de victoire Homme'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-le-parisien-254-x-336-mm-3.png',
      'Affiche en cas de victoire Femme'),
  ];
  static caisseEpargneHandball: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - supporter officiel de l\'équipe de France de Handball',
    'Création de l\'affiche pour la coupe du monde de handball homme et femme',
    'Agence : Altmann + Pacreau / CR : Jeanne Teissier / Photographe maillot : David Meignan / Photographe femmes : Etienne Garnier',
    ContentDataMock.caisseEpargneHandballBlocks
  );



  static caisseEpargneSecuriteRoutiereBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-pre-vention-routie-803-x-1073.png')
  ];
  static caisseEpargneSecuriteRoutiere: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - Sécurité Routière',
    '',
    'Agence : Altmann + Pacreau / CR : Cédric Ferrand  / Photographe : Ronan Mérot ',
    ContentDataMock.caisseEpargneSecuriteRoutiereBlocks
  );




  //nikon
  static nikonSearchSearchImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/nikon/search_jungle_652x461.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_snow_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_mountain_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_sun_652x461.png', ''),
  ];
  static nikonBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/nikon/tote-bag-1_1212x756.png',
      ''),
    new ContentSearchModel(ContentDataMock.nikonSearchSearchImages, "Recherches")
  ];
  static nikon: ContentPageModel = new ContentPageModel(
    'Nikon - Illustration pour totebag',
    'Illustrations pour un totebag nikon.',
    'Agence : Altmann + Pacreau',
    ContentDataMock.nikonBlocks
  );




  //abbe pierre
  static abbePierreMosaicImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-1-fap-picsdor-2020-587-x-830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-2-fap-picsdor-affiche-1101-x-830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-3-fap-picsdor-depliant-1101-x-830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-4-fap-stickers-587-x-830.png'),
  ];

  static abbePierreBlocks: ContentBlockModel[] = [
    new ContentLegendModel(ContentDataMock.abbePierreMosaicImages, 'Affiche et déclinaison 2020'),
    new ContentVideoModel('/assets/img/content/abbe-pierre/PICS_DOR.mp4',
      'Vidéo teaser 2019'),
  ];
  static abbePierre: ContentPageModel = new ContentPageModel(
    'FONDATION ABBÉ PIERRE - les pics d’or',
    'Montage vidéo pour la cérémonie de remise des prix des Pics D’or : ' +
    'cérémonie visant à dénoncer les pires dispositifs anti-SDF.',
    'Agence : Altmann + Pacreau',
    ContentDataMock.abbePierreBlocks
  );





  //en mouvement
  static enMouvementSearchImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-1-919x576.png', ''),
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-2-918x576.png', ''),
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-3-919x577.png', ''),
    new ContentImageModel('/assets/img/content/en-mouvement/mosaic-4-918x577.png', ''),
  ];

  static enMouvementBlocks: ContentBlockModel[] = [
    new ContentImageModel("/assets/img/content/en-mouvement/web-bel-ami-cover-1256x659.png"),
    new ContentImageModel("/assets/img/content/en-mouvement/we-blivre-df-copie-1256x659.png"),
    new ContentImageModel("/assets/img/content/en-mouvement/pages-1256x659.png"),
    new ContentSearchModel(ContentDataMock.enMouvementSearchImages)
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
    'En partenariat avec l\'UNICEF',
    ContentDataMock.nuitEauBlocks
  );




  //fondation de france
  static fdfCovidBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/fondation-de-france/FDF-COVID19.mp4'),
  ];
  static fondationDeFranceCovid: ContentPageModel = new ContentPageModel(
    'FONDATION DE FRANCE - COVID 19',
    '',
    'Agence : Altmann + Pacreau',
    ContentDataMock.fdfCovidBlocks
  );



  //the erable
  static theErableBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/the-erable/the-erable-full-package-1309-x-1005.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-fermee-631-x-447.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-ouverte-635-x-446.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-haut-632-x-447.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-636-x447.png')
  ];
  static theErable: ContentPageModel = new ContentPageModel(
    'BOITE DE THÉ À L\'ÉRABLE AVEC SUCRE À L\'ÉRABLE',
    '',
    'UQÀM',
    ContentDataMock.theErableBlocks
  );



//----------------------------------------------------------------------------------------------------------------


  static contentDataDic = {
    'caisse-epargne-handball': ContentDataMock.caisseEpargneHandball,
    'caisse-epargne-securite-routiere': ContentDataMock.caisseEpargneSecuriteRoutiere,
    'nikon': ContentDataMock.nikon,
    'abbe-pierre': ContentDataMock.abbePierre,
    'en-mouvement': ContentDataMock.enMouvement,
    'crazy-horse': ContentDataMock.crazyHorse,
    'nuit-eau': ContentDataMock.nuitEau,
    'fdf-covid': ContentDataMock.fondationDeFranceCovid,
    'the-erable': ContentDataMock.theErable
  };

}
