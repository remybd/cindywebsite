import {ContentPageModel} from '../content/models/content-page.model';
import {ContentImageModel} from '../content/models/content-image.model';
import {ContentBlockModel} from '../content/models/content-block.model';
import {ContentSearchModel} from '../content/models/content-search.model';
import {ContentVideoModel} from '../content/models/content-video.model';
import {ContentLegendModel} from '../content/models/content-legend.model';

export class ContentDataMock {

  // caisse epargne
  static caisseEpargneHandballBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/caisse-epargne/handball-homme-soutien-1-600x800.png',
      'Affiche soutien Homme'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-mm-handball-homme-victoire-254x336.png',
      'Affiche en cas de victoire Homme'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-le-parisien-mm-3-254x336.png',
      'Affiche en cas de victoire Femme'),
  ];
  static caisseEpargneHandball: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - supporter officiel de l\'équipe de France de Handball',
    'Création de l\'affiche pour la coupe du monde de handball homme et femme',
    'Agence : Altmann + Pacreau / CR : Jeanne Teissier / Photographe maillot : David Meignan / Photographe femmes : Etienne Garnier',
    ContentDataMock.caisseEpargneHandballBlocks
  );


  static caisseEpargneSecuriteRoutiereBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-pre-vention-routie-803x1073.png')
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
    new ContentSearchModel(ContentDataMock.nikonSearchSearchImages, 'Recherches')
  ];
  static nikon: ContentPageModel = new ContentPageModel(
    'Nikon - Illustration pour totebag',
    '',
    'Agence : Altmann + Pacreau',
    ContentDataMock.nikonBlocks
  );


  //abbe pierre
  static abbePierreMosaicImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-1-fap-picsdor-2020-587x830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-2-fap-picsdor-affiche-1101x830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-3-fap-picsdor-depliant-1101x830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-4-fap-stickers-587x830.png'),
  ];

  static abbePierreBlocks: ContentBlockModel[] = [
    new ContentLegendModel(ContentDataMock.abbePierreMosaicImages, 'Affiche et déclinaison 2020'),
    new ContentVideoModel('/assets/img/content/abbe-pierre/PICS_DOR.mp4',
      'Vidéo teaser 2019'),
  ];
  static abbePierre: ContentPageModel = new ContentPageModel(
    'FONDATION ABBÉ PIERRE - les pics d’or',
    '',
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
    new ContentImageModel('/assets/img/content/en-mouvement/web-bel-ami-cover-1256x659.png'),
    new ContentImageModel('/assets/img/content/en-mouvement/we-blivre-df-copie-1256x659.png'),
    new ContentImageModel('/assets/img/content/en-mouvement/pages-1256x659.png'),
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
    new ContentImageModel('/assets/img/content/the-erable/the-erable-full-package-1309x1005.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-fermee-631x447.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-ouverte-635x446.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-haut-632x447.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-636x447.png')
  ];
  static theErable: ContentPageModel = new ContentPageModel(
    'BOITE DE THÉ À L\'ÉRABLE AVEC SUCRE À L\'ÉRABLE',
    '',
    'UQÀM',
    ContentDataMock.theErableBlocks
  );


  //pompidou
  static pompidouBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/pompidou/magazine-close-1309x1005.png'),
    new ContentImageModel('/assets/img/content/pompidou/page-1-631x447.png'),
    new ContentImageModel('/assets/img/content/pompidou/page-2-635x446.png'),
    new ContentImageModel('/assets/img/content/pompidou/page-3-632x447.png'),
    new ContentImageModel('/assets/img/content/pompidou/page-4-636x447.png')
  ];
  static pompidou: ContentPageModel = new ContentPageModel(
    'CENTRE POMPIDOU - BROCHURE',
    '',
    'ECV',
    ContentDataMock.pompidouBlocks
  );


  //3xj dentifrice
  static dentifrice3xjBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/3xj-dentifrice/close-box-587x830.png'),
    new ContentImageModel('/assets/img/content/3xj-dentifrice/brosse-a-dent-1101x830.png'),
    new ContentImageModel('/assets/img/content/3xj-dentifrice/boite-ouverte-1101x830.png'),
    new ContentImageModel('/assets/img/content/3xj-dentifrice/instructions-3-587x830.png'),

    new ContentImageModel('/assets/img/content/3xj-dentifrice/box-top-829x588.png'),
    new ContentImageModel('/assets/img/content/3xj-dentifrice/instructions-2-835x586.png'),
    new ContentImageModel('/assets/img/content/3xj-dentifrice/instructions-830x587.png'),
    new ContentImageModel('/assets/img/content/3xj-dentifrice/brosse-a-dent-836x587.png'),
  ];
  static dentifrice3xj: ContentPageModel = new ContentPageModel(
    '3x/j - kit de soins dentaires pour enfants',
    '',
    'UQÀM',
    ContentDataMock.dentifrice3xjBlocks
  );


  // croix rouge
  static croixRougeBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/croix-rouge/croix-rouge-affiche-803x1074.png')
  ];

  static croixRouge: ContentPageModel = new ContentPageModel(
    'CROIX ROUGE - APPEL AUX DONS',
    '',
    'Agence : Altmann + Pacreau',
    ContentDataMock.croixRougeBlocks
  );



  // france galop
  static franceGalopBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/france-galop/fg-dimanches-au-galop.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-steeple-chase.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-prix-de-diane.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-prix-jockey-club.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-saint-cloud.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-garden-party.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-prix-arc-de-triomphe.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-deauville.png'),

    new ContentVideoModel('/assets/img/content/france-galop/FG-DOOH-MOCK-UP-1.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/france-galop/FG-DOOH-MOCK-UP-2.mp4', '', 'video/mp4', true),

    new ContentImageModel('/assets/img/content/france-galop/fg-colonne-dimanche.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-dimanche-cartes.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-cheveaux-trotinette.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-prix-arc-triomphe-batiment.png'),
    new ContentImageModel('/assets/img/content/france-galop/fg-garden-party-entree.png')

  ];

  static franceGalop: ContentPageModel = new ContentPageModel(
    'FRANCE GALOP - CAMPAGNE 2019',
    '',
    'Agence : Altmann + Pacreau / Photographe : Benjamin Schmuck',
    ContentDataMock.franceGalopBlocks
  );


  // petit navire
  static petitNavireBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/petit-navire/affiche_energie-1134x850.jpg'),
    new ContentImageModel('/assets/img/content/petit-navire/affiche_muscler-1134x850.jpg'),
    new ContentImageModel('/assets/img/content/petit-navire/affiche_memoire-1314x850.jpg'),
    new ContentVideoModel('/assets/img/content/petit-navire/clip_petit_navire.mp4')
  ];

  static petitNavire: ContentPageModel = new ContentPageModel(
    'PETIT NAVIRE - CAMPAGNE 2020',
    '',
    'Agence : Altmann + Pacreau',
    ContentDataMock.petitNavireBlocks
  )

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
    'the-erable': ContentDataMock.theErable,
    'pompidou': ContentDataMock.pompidou,
    '3xj-dentifrice': ContentDataMock.dentifrice3xj,
    'croix-rouge': ContentDataMock.croixRouge,
    'france-galop': ContentDataMock.franceGalop,
    'petit-navire': ContentDataMock.petitNavire
  };

}
