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
      'Men cheering poster'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-mm-handball-homme-victoire-254x336.png',
      'Poster for men victory'),
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-handball-l-equipe-le-parisien-mm-3-254x336.png',
      'Poster for women victory'),
  ];
  static caisseEpargneHandball: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    ContentDataMock.caisseEpargneHandballBlocks
  );


  static caisseEpargneSecuriteRoutiereBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/caisse-epargne/ce-pre-vention-routie-803x1073.png')
  ];
  static caisseEpargneSecuriteRoutiere: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - Road safety',
    '',
    'Agency: Altmann + Pacreau / Copywriter : Cédric Ferrand  / Photograph : Ronan Mérot ',
    ContentDataMock.caisseEpargneSecuriteRoutiereBlocks
  );


  static caisseEpargneParis2024Blocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/caisse-epargne-jo/ce-dooh-hauteur-generique.mp4', '', 'video/mp4', false),
    new ContentVideoModel('/assets/img/content/caisse-epargne-jo/ce-dooh-hauteur-athletisme.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/caisse-epargne-jo/ce-dooh-hauteur-boy.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/caisse-epargne-jo/ce-dooh-hauteur-handi-basket.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/caisse-epargne-jo/ce-dooh-hauteur-travaux.mp4', '', 'video/mp4', true)
  ];

  static caisseEpargneParis2024: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - Paris 2024',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.caisseEpargneParis2024Blocks
  );


  // nikon
  static nikonSearchSearchImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/nikon/search_jungle_652x461.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_snow_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_mountain_656x463.png', ''),
    new ContentImageModel('/assets/img/content/nikon/search_sun_652x461.png', ''),
  ];
  static nikonBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/nikon/tote-bag-1_1212x756.png',
      ''),
    new ContentSearchModel(ContentDataMock.nikonSearchSearchImages, 'Research')
  ];
  static nikon: ContentPageModel = new ContentPageModel(
    'Nikon - Illustration for tote bag',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.nikonBlocks
  );


  // abbe pierre
  static abbePierreMosaicImages: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-1-fap-picsdor-2020-587x830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-2-fap-picsdor-affiche-1101x830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-3-fap-picsdor-depliant-1101x830.png'),
    new ContentImageModel('/assets/img/content/abbe-pierre/mosaic-4-fap-stickers-587x830.png'),
  ];

  static abbePierreBlocks: ContentBlockModel[] = [
    new ContentLegendModel(ContentDataMock.abbePierreMosaicImages, '2020 Posters and adaptations'),
    new ContentVideoModel('/assets/img/content/abbe-pierre/PICS_DOR.mp4',
      'Video teaser 2019'),
  ];
  static abbePierre: ContentPageModel = new ContentPageModel(
    'FONDATION ABBÉ PIERRE - les pics d’or',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.abbePierreBlocks
  );


  // en mouvement
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
    'EN MOUVEMENT - Publishing company',
    'Creation of a publishing company' +
    'Visual identity and graphic guidelines',
    '',
    ContentDataMock.enMouvementBlocks
  );


  // crazy Horse
  static crazyHorseBlocks: ContentImageModel[] = [
    new ContentImageModel('/assets/img/content/crazy-horse/crazy-horse-recto-868x581.png'),
    new ContentImageModel('/assets/img/content/crazy-horse/crazy-horse-verso-879x586.png')
  ];
  static crazyHorse: ContentPageModel = new ContentPageModel(
    'CRAZY HORSE - 2018 greeting card',
    '',
    'Agency: Hub ID&Napoli',
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
    'UNICEF - La nuit de l\'eau',
      'Creation of the poster for the 10th edition of the Nuit de l\'Eau.',
    'In partnership with UNICEF',
    ContentDataMock.nuitEauBlocks
  );


  // fondation de france
  static fdfCovidBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/fondation-de-france/FDF-COVID19.mp4'),
  ];
  static fondationDeFranceCovid: ContentPageModel = new ContentPageModel(
    'FONDATION DE FRANCE - COVID 19',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.fdfCovidBlocks
  );


  // the erable
  static theErableBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/the-erable/the-erable-full-package-1309x1005.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-fermee-631x447.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-ouverte-635x446.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-boite-haut-632x447.png'),
    new ContentImageModel('/assets/img/content/the-erable/the-erable-636x447.png')
  ];
  static theErable: ContentPageModel = new ContentPageModel(
    'Maple tea box with maple sugar',
    '',
    'UQÀM',
    ContentDataMock.theErableBlocks
  );


  // pompidou
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


  // 3xj dentifrice
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
    '3x/j - Dental first kid\'s kit',
    '',
    'UQÀM',
    ContentDataMock.dentifrice3xjBlocks
  );


  // croix rouge
  static croixRougeBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/croix-rouge/croix-rouge-affiche-803x1074.png')
  ];

  static croixRouge: ContentPageModel = new ContentPageModel(
    'FRENCH RED CROSS - Call for donations',
    '',
    'Agency: Altmann + Pacreau',
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
    'FRANCE GALOP - 2019 CAMPAIGN',
    '',
    'Agency: Altmann + Pacreau / Photograph : Benjamin Schmuck',
    ContentDataMock.franceGalopBlocks);


  // petit navire
  static petitNavireBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/petit-navire/affiche_energie-1134x850.jpg'),
    new ContentImageModel('/assets/img/content/petit-navire/affiche_muscler-1134x850.jpg'),
    new ContentImageModel('/assets/img/content/petit-navire/affiche_memoire-1314x850.jpg'),
    new ContentVideoModel('/assets/img/content/petit-navire/clip_petit_navire.mp4')
  ];

  static petitNavire: ContentPageModel = new ContentPageModel(
    'PETIT NAVIRE - 2020 CAMPAIGN',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.petitNavireBlocks
  );


  // lapeyre pro
  static lapeyreProSearchSitu: ContentSearchModel = new ContentSearchModel([
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-affichette-633x895.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-totem-633-895.png'),
  ]);

  static lapeyreProSearchGuidelines: ContentSearchModel = new ContentSearchModel([
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-1-1344x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-2-1340x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-3-1340x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-4-1340x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-5-1332x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-6-1346x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-10-1332x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-7-1346x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-12-1332x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-9-1338x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-11-1326x946.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-guidelines-8-1338x946.png'),
  ]);

  static lapeyreProBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-catalogue-couverture-1309x1005.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-catalogue-interieur-1309x1005.png'),
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-plaquette-1309x1005.png'),
    ContentDataMock.lapeyreProSearchSitu,
    new ContentImageModel('/assets/img/content/lapeyre-pro/lp-travaux-1309x1005.png'),
    ContentDataMock.lapeyreProSearchGuidelines
  ];


  static lapeyrePro: ContentPageModel = new ContentPageModel(
    'LAPEYRE PRO - 360 COMMUNICATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.lapeyreProBlocks
  );








  // lapeyre pro
  static lapeyreBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/lapeyre/lp-campagne-baignoire-1307x981.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-campagne-cuisine-1306x980.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-noel-1300x975.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-anniversaire-1298x670.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-folie-equerre-1299x974.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-affiche-rouen-1297x973.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-presse-1-1296x929.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-catalogue-page-service-1300x885.png'),
    new ContentImageModel('/assets/img/content/lapeyre/lp-depliant-service-1293x1293.png'),
    new ContentVideoModel('/assets/img/content/lapeyre/lp-dooh-cuisine.mp4', '', 'video/mp4', false),
    new ContentVideoModel('/assets/img/content/lapeyre/lp-dooh-nouvelle-collection.mp4', '', 'video/mp4', true),
  ];


  static lapeyre: ContentPageModel = new ContentPageModel(
    'LAPEYRE 2018/2019 - 360 COMMUNICATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.lapeyreBlocks
  );


  // lescure
  static lescureBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/lescure/lescure-dooh-doux-1080x1920.mp4', '', 'video/mp4', true)
  ];

  static lescure: ContentPageModel = new ContentPageModel(
    'MAISON LESCURE - DOOH',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.lescureBlocks
  );

  // naturalia
  static naturaliaBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/naturalia/naturalia-dooh-oeuf.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/naturalia/naturalia-dooh-salade.mp4', '', 'video/mp4', true)
  ];

  static naturalia: ContentPageModel = new ContentPageModel(
    'NATURALIA - LOCAL CAMPAIGN ADAPTATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.naturaliaBlocks
  );

  // opel
  static opelBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/opel/opel-digital-aw-check-high.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/opel/opel-digital-winter-wheels.mp4', '', 'video/mp4', true)
  ];

  static opel: ContentPageModel = new ContentPageModel(
    'OPEL - 360 COMMUNICATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.opelBlocks
  );


  // plant a fin
  static plantaFinBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/plant-a-fin/crepes.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/plant-a-fin/biscottes.mp4', '', 'video/mp4', true)
  ];

  static plantaFin: ContentPageModel = new ContentPageModel(
    'PLANTA FIN - SOCIAL MEDIA',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.plantaFinBlocks
  );




  // Maxi Cash
  static maxiCashChristmasBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/maxi-cash-christmas/D15645 - Maxi Cash - Christmas VIDEO - HD 1280x720 - FA.mp4'),
    new ContentImageModel('/assets/img/content/maxi-cash-christmas/maxi_cash_christmas.jpg'),
    new ContentImageModel('/assets/img/content/maxi-cash-christmas/SG3006C_93_Maxi-Cash_left.JPG.db33758c6c196d9d8717cc1d788feb60.jpg')
  ];

  static maxiCashChristmas: ContentPageModel = new ContentPageModel(
    'MAXI CASH - The joy of giving',
    'Video, Wall Mural and Bus Wrap',
    'Agency: Adred Creative',
    ContentDataMock.maxiCashChristmasBlocks
  );


  static maxiCashPaynowBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/maxi-cash-paynow/D16436 - MAXI CASH PAYNOW VIDEO ANIMATION - 8.mp4')
  ];

  static maxiCashPaynow: ContentPageModel = new ContentPageModel(
    'MAXI CASH - PayNow',
    'Video to launch Paynow new service',
    'Agency: Adred Creative',
    ContentDataMock.maxiCashPaynowBlocks
  );


  // PTC
  static ptcBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/ptc/D15674 PTC - Video infographic transport fare increasement - 3.mp4')
  ];

  static ptc: ContentPageModel = new ContentPageModel(
    'PTC - Fare Increase',
    '',
    'Agency: Adred Creative',
    ContentDataMock.ptcBlocks
  );



  // Philips
  static philipsBlocks: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/philips/D15544 - Philips x Millenia walk event - A4 tent card.jpg'),
    new ContentImageModel('/assets/img/content/philips/D15568 - Philips Q4 end year festive celebration - V2- R3.jpg'),
    new ContentImageModel('/assets/img/content/philips/D15647 - Philips x Best Denki Grand electrical Fair - 6-01.jpg'),
    new ContentImageModel('/assets/img/content/philips/D15792 Philips Brand Fair x Best Denki Version 2 - A4 tentcard.jpg')
  ];

  static philips: ContentPageModel = new ContentPageModel(
    'Philips - A4 Tent Cards',
    '',
    'Agency: Adred Creative',
    ContentDataMock.philipsBlocks
  );


  // Rare

  static rareRealLifeBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/rare/rare_in_stitus.mp4'),
    new ContentImageModel('/assets/img/content/rare/IMG-20230218-WA0001_v2.jpg')
  ];

  static rareBlocks: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/rare/RARE DISEASES SOCIETY VIDEO - FA.mp4'),
    new ContentLegendModel(ContentDataMock.rareRealLifeBlocks),
  ];

  static rare: ContentPageModel = new ContentPageModel(
    'Rare - Light Up for Rare',
    '',
    'Agency: Adred Creative',
    ContentDataMock.rareBlocks
  );



  // WSG

  static wsgBlock: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/wsg/Artboard 6.jpg'),
    new ContentImageModel('/assets/img/content/wsg/Artboard 7.jpg'),
    new ContentVideoModel('/assets/img/content/wsg/D15726 - WSG - Scholarship video - 4.mp4', '', 'video/mp4', true),
    new ContentVideoModel('/assets/img/content/wsg/D15759 - SSG-WSG SCHOLARSHIP TIKTOK VIDEO - FA.mp4'),
  ];

  static wsg: ContentPageModel = new ContentPageModel(
    'Workforce Singapore',
    'WSG - SSG - Joint undergraduate scholarship',
    'Agency: Adred Creative',
    ContentDataMock.wsgBlock
  );


  // NYC

  static nycBlock: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/nyc/Orange-100.jpg'),
    new ContentImageModel('/assets/img/content/nyc/DI_7-orange.jpg'),
  ];

  static nyc: ContentPageModel = new ContentPageModel(
    'National Youth Council ',
    'Poster for the Young ChangeMakers Grant',
    'Agency: Adred Creative',
    ContentDataMock.nycBlock
  );

  // SPC

  static spcBlock: ContentBlockModel[] = [
    new ContentImageModel('/assets/img/content/spc/spc_bottle.jpg'),
  ];

  static spc: ContentPageModel = new ContentPageModel(
    'Singapore Petroleum Company',
    'Poster to promote their new mineral water recycled bottle',
    'Agency: Adred Creative',
    ContentDataMock.spcBlock
  );


  // XEPA

  static xepaBlock: ContentBlockModel[] = [
    new ContentVideoModel('/assets/img/content/xepa/D15760 XEPA - Cough TVC - 6 R3.mp4'),
  ];

  static xepa: ContentPageModel = new ContentPageModel(
    'XEPA - Cough Solutions',
    'TVC for Tussidex and Mucolix cough solutions',
    'Agency: Adred Creative',
    ContentDataMock.xepaBlock
  );



// ----------------------------------------------------------------------------------------------------------------


  static contentDataDic = {
    'caisse-epargne-handball': ContentDataMock.caisseEpargneHandball,
    'caisse-epargne-securite-routiere': ContentDataMock.caisseEpargneSecuriteRoutiere,
    'caisse-epargne-paris-2024': ContentDataMock.caisseEpargneParis2024,
    nikon: ContentDataMock.nikon,
    'abbe-pierre': ContentDataMock.abbePierre,
    'en-mouvement': ContentDataMock.enMouvement,
    'crazy-horse': ContentDataMock.crazyHorse,
    'nuit-eau': ContentDataMock.nuitEau,
    'fdf-covid': ContentDataMock.fondationDeFranceCovid,
    'the-erable': ContentDataMock.theErable,
    pompidou: ContentDataMock.pompidou,
    '3xj-dentifrice': ContentDataMock.dentifrice3xj,
    'croix-rouge': ContentDataMock.croixRouge,
    'france-galop': ContentDataMock.franceGalop,
    'petit-navire': ContentDataMock.petitNavire,
    'lapeyre-pro': ContentDataMock.lapeyrePro,
    lapeyre: ContentDataMock.lapeyre,
    lescure: ContentDataMock.lescure,
    naturalia: ContentDataMock.naturalia,
    opel: ContentDataMock.opel,
    'planta-fin': ContentDataMock.plantaFin,
    'maxi-cash-christmas': ContentDataMock.maxiCashChristmas,
    'maxi-cash-paynow': ContentDataMock.maxiCashPaynow,
    ptc: ContentDataMock.ptc,
    philips: ContentDataMock.philips,
    rare: ContentDataMock.rare,
    wsg: ContentDataMock.wsg,
    nyc: ContentDataMock.nyc,
    spc: ContentDataMock.spc,
    xepa: ContentDataMock.xepa,
  };

}
