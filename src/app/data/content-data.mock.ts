import {ContentPageModel} from '../content/models/content-page.model';
import {ContentImageModel} from '../content/models/content-image.model';
import {ContentBlockModel} from '../content/models/content-block.model';
import {ContentSearchModel} from '../content/models/content-search.model';
import {ContentVideoModel} from '../content/models/content-video.model';
import {ContentLegendModel} from '../content/models/content-legend.model';

export class ContentDataMock {
  static rootAssets = '/assets/img/content/';


  // caisse epargne
  static caisseEpargneHandballBlocks: ContentImageModel[] = [
    new ContentImageModel(this.rootAssets + 'caisse-epargne/handball-homme-soutien-1-600x800.png',
      'Men cheering poster'),
    new ContentImageModel(this.rootAssets + 'caisse-epargne/ce-handball-l-equipe-mm-handball-homme-victoire-254x336.png',
      'Poster for men victory'),
    new ContentImageModel(this.rootAssets + 'caisse-epargne/ce-handball-l-equipe-le-parisien-mm-3-254x336.png',
      'Poster for women victory'),
  ];
  static caisseEpargneHandball: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    ContentDataMock.caisseEpargneHandballBlocks
  );


  static caisseEpargneSecuriteRoutiereBlocks: ContentImageModel[] = [
    new ContentImageModel(this.rootAssets + 'caisse-epargne/ce-pre-vention-routie-803x1073.png')
  ];
  static caisseEpargneSecuriteRoutiere: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - Road safety',
    '',
    'Agency: Altmann + Pacreau / Copywriter : Cédric Ferrand  / Photograph : Ronan Mérot ',
    ContentDataMock.caisseEpargneSecuriteRoutiereBlocks
  );


  static caisseEpargneParis2024Blocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'caisse-epargne-jo/ce-dooh-hauteur-generique.mp4', '', 'video/mp4', false),
    new ContentVideoModel(this.rootAssets + 'caisse-epargne-jo/ce-dooh-hauteur-athletisme.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'caisse-epargne-jo/ce-dooh-hauteur-boy.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'caisse-epargne-jo/ce-dooh-hauteur-handi-basket.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'caisse-epargne-jo/ce-dooh-hauteur-travaux.mp4', '', 'video/mp4', true)
  ];

  static caisseEpargneParis2024: ContentPageModel = new ContentPageModel(
    'Caisse d\'épargne - Paris 2024',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.caisseEpargneParis2024Blocks
  );


  // nikon
  static nikonSearchSearchImages: ContentImageModel[] = [
    new ContentImageModel(this.rootAssets + 'nikon/search_jungle_652x461.png', ''),
    new ContentImageModel(this.rootAssets + 'nikon/search_snow_656x463.png', ''),
    new ContentImageModel(this.rootAssets + 'nikon/search_mountain_656x463.png', ''),
    new ContentImageModel(this.rootAssets + 'nikon/search_sun_652x461.png', ''),
  ];
  static nikonBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'nikon/tote-bag-1_1212x756.png',
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
    new ContentImageModel(this.rootAssets + 'abbe-pierre/mosaic-1-fap-picsdor-2020-587x830.png'),
    new ContentImageModel(this.rootAssets + 'abbe-pierre/mosaic-2-fap-picsdor-affiche-1101x830.png'),
    new ContentImageModel(this.rootAssets + 'abbe-pierre/mosaic-3-fap-picsdor-depliant-1101x830.png'),
    new ContentImageModel(this.rootAssets + 'abbe-pierre/mosaic-4-fap-stickers-587x830.png'),
  ];

  static abbePierreBlocks: ContentBlockModel[] = [
    new ContentLegendModel(ContentDataMock.abbePierreMosaicImages, '2020 Posters and adaptations'),
    new ContentVideoModel(this.rootAssets + 'abbe-pierre/PICS_DOR.mp4',
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
    new ContentImageModel(this.rootAssets + 'en-mouvement/mosaic-1-919x576.png', ''),
    new ContentImageModel(this.rootAssets + 'en-mouvement/mosaic-2-918x576.png', ''),
    new ContentImageModel(this.rootAssets + 'en-mouvement/mosaic-3-919x577.png', ''),
    new ContentImageModel(this.rootAssets + 'en-mouvement/mosaic-4-918x577.png', ''),
  ];

  static enMouvementBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'en-mouvement/web-bel-ami-cover-1256x659.png'),
    new ContentImageModel(this.rootAssets + 'en-mouvement/we-blivre-df-copie-1256x659.png'),
    new ContentImageModel(this.rootAssets + 'en-mouvement/pages-1256x659.png'),
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
    new ContentImageModel(this.rootAssets + 'crazy-horse/crazy-horse-recto-868x581.png'),
    new ContentImageModel(this.rootAssets + 'crazy-horse/crazy-horse-verso-879x586.png')
  ];
  static crazyHorse: ContentPageModel = new ContentPageModel(
    'CRAZY HORSE - 2018 greeting card',
    '',
    'Agency: Hub ID&Napoli',
    ContentDataMock.crazyHorseBlocks
  );


  // nuit de l'eau
  static nuitEauBlocks: ContentImageModel[] = [
    new ContentImageModel(this.rootAssets + 'nuit-eau/image-affiche-la-nuit-de-l-eau-587x830.png'),
    new ContentImageModel(this.rootAssets + 'nuit-eau/image-la-nuit-de-l-eau-abribus-1101x830.png'),
    new ContentImageModel(this.rootAssets + 'nuit-eau/image-capture-d-e-cran-2019-1101x830.png'),
    new ContentImageModel(this.rootAssets + 'nuit-eau/image-tote-bag-la-nuit-de-l-eau-597x830.png')
  ];
  static nuitEau: ContentPageModel = new ContentPageModel(
    'UNICEF - La nuit de l\'eau',
      'Creation of the poster for the 10th edition of the Nuit de l\'Eau.',
    'In partnership with UNICEF',
    ContentDataMock.nuitEauBlocks
  );


  // fondation de france
  static fdfCovidBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'fondation-de-france/FDF-COVID19.mp4'),
  ];
  static fondationDeFranceCovid: ContentPageModel = new ContentPageModel(
    'FONDATION DE FRANCE - COVID 19',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.fdfCovidBlocks
  );


  // the erable
  static theErableBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'the-erable/the-erable-full-package-1309x1005.png'),
    new ContentImageModel(this.rootAssets + 'the-erable/the-erable-boite-fermee-631x447.png'),
    new ContentImageModel(this.rootAssets + 'the-erable/the-erable-boite-ouverte-635x446.png'),
    new ContentImageModel(this.rootAssets + 'the-erable/the-erable-boite-haut-632x447.png'),
    new ContentImageModel(this.rootAssets + 'the-erable/the-erable-636x447.png')
  ];
  static theErable: ContentPageModel = new ContentPageModel(
    'Maple tea box with maple sugar',
    '',
    'UQÀM',
    ContentDataMock.theErableBlocks
  );


  // pompidou
  static pompidouBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'pompidou/magazine-close-1309x1005.png'),
    new ContentImageModel(this.rootAssets + 'pompidou/page-1-631x447.png'),
    new ContentImageModel(this.rootAssets + 'pompidou/page-2-635x446.png'),
    new ContentImageModel(this.rootAssets + 'pompidou/page-3-632x447.png'),
    new ContentImageModel(this.rootAssets + 'pompidou/page-4-636x447.png')
  ];
  static pompidou: ContentPageModel = new ContentPageModel(
    'CENTRE POMPIDOU - BROCHURE',
    '',
    'ECV',
    ContentDataMock.pompidouBlocks
  );


  // 3xj dentifrice
  static dentifrice3xjBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/close-box-587x830.png'),
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/brosse-a-dent-1101x830.png'),
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/boite-ouverte-1101x830.png'),
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/instructions-3-587x830.png'),

    new ContentImageModel(this.rootAssets + '3xj-dentifrice/box-top-829x588.png'),
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/instructions-2-835x586.png'),
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/instructions-830x587.png'),
    new ContentImageModel(this.rootAssets + '3xj-dentifrice/brosse-a-dent-836x587.png'),
  ];
  static dentifrice3xj: ContentPageModel = new ContentPageModel(
    '3x/j - Dental first kid\'s kit',
    '',
    'UQÀM',
    ContentDataMock.dentifrice3xjBlocks
  );


  // croix rouge
  static croixRougeBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'croix-rouge/croix-rouge-affiche-803x1074.png')
  ];

  static croixRouge: ContentPageModel = new ContentPageModel(
    'FRENCH RED CROSS - Call for donations',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.croixRougeBlocks
  );


  // france galop
  static franceGalopBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'france-galop/fg-dimanches-au-galop.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-steeple-chase.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-prix-de-diane.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-prix-jockey-club.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-saint-cloud.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-garden-party.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-prix-arc-de-triomphe.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-deauville.png'),

    new ContentVideoModel(this.rootAssets + 'france-galop/FG-DOOH-MOCK-UP-1.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'france-galop/FG-DOOH-MOCK-UP-2.mp4', '', 'video/mp4', true),

    new ContentImageModel(this.rootAssets + 'france-galop/fg-colonne-dimanche.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-dimanche-cartes.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-cheveaux-trotinette.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-prix-arc-triomphe-batiment.png'),
    new ContentImageModel(this.rootAssets + 'france-galop/fg-garden-party-entree.png')

  ];

  static franceGalop: ContentPageModel = new ContentPageModel(
    'FRANCE GALOP - 2019 CAMPAIGN',
    '',
    'Agency: Altmann + Pacreau / Photograph : Benjamin Schmuck',
    ContentDataMock.franceGalopBlocks);


  // petit navire
  static petitNavireBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'petit-navire/affiche_energie-1134x850.jpg'),
    new ContentImageModel(this.rootAssets + 'petit-navire/affiche_muscler-1134x850.jpg'),
    new ContentImageModel(this.rootAssets + 'petit-navire/affiche_memoire-1314x850.jpg'),
    new ContentVideoModel(this.rootAssets + 'petit-navire/clip_petit_navire.mp4')
  ];

  static petitNavire: ContentPageModel = new ContentPageModel(
    'PETIT NAVIRE - 2020 CAMPAIGN',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.petitNavireBlocks
  );


  // lapeyre pro
  static lapeyreProSearchSitu: ContentSearchModel = new ContentSearchModel([
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-affichette-633x895.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-totem-633-895.png'),
  ]);

  static lapeyreProSearchGuidelines: ContentSearchModel = new ContentSearchModel([
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-1-1344x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-2-1340x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-3-1340x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-4-1340x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-5-1332x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-6-1346x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-10-1332x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-7-1346x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-12-1332x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-9-1338x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-11-1326x946.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-guidelines-8-1338x946.png'),
  ]);

  static lapeyreProBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-catalogue-couverture-1309x1005.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-catalogue-interieur-1309x1005.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-plaquette-1309x1005.png'),
    ContentDataMock.lapeyreProSearchSitu,
    new ContentImageModel(this.rootAssets + 'lapeyre-pro/lp-travaux-1309x1005.png'),
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
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-campagne-baignoire-1307x981.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-campagne-cuisine-1306x980.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-noel-1300x975.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-anniversaire-1298x670.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-folie-equerre-1299x974.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-affiche-rouen-1297x973.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-presse-1-1296x929.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-catalogue-page-service-1300x885.png'),
    new ContentImageModel(this.rootAssets + 'lapeyre/lp-depliant-service-1293x1293.png'),
    new ContentVideoModel(this.rootAssets + 'lapeyre/lp-dooh-cuisine.mp4', '', 'video/mp4', false),
    new ContentVideoModel(this.rootAssets + 'lapeyre/lp-dooh-nouvelle-collection.mp4', '', 'video/mp4', true),
  ];


  static lapeyre: ContentPageModel = new ContentPageModel(
    'LAPEYRE 2018/2019 - 360 COMMUNICATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.lapeyreBlocks
  );


  // lescure
  static lescureBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'lescure/lescure-dooh-doux-1080x1920.mp4', '', 'video/mp4', true)
  ];

  static lescure: ContentPageModel = new ContentPageModel(
    'MAISON LESCURE - DOOH',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.lescureBlocks
  );

  // naturalia
  static naturaliaBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'naturalia/naturalia-dooh-oeuf.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'naturalia/naturalia-dooh-salade.mp4', '', 'video/mp4', true)
  ];

  static naturalia: ContentPageModel = new ContentPageModel(
    'NATURALIA - LOCAL CAMPAIGN ADAPTATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.naturaliaBlocks
  );

  // opel
  static opelBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'opel/opel-digital-aw-check-high.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'opel/opel-digital-winter-wheels.mp4', '', 'video/mp4', true)
  ];

  static opel: ContentPageModel = new ContentPageModel(
    'OPEL - 360 COMMUNICATION',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.opelBlocks
  );


  // plant a fin
  static plantaFinBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'plant-a-fin/crepes.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'plant-a-fin/biscottes.mp4', '', 'video/mp4', true)
  ];

  static plantaFin: ContentPageModel = new ContentPageModel(
    'PLANTA FIN - SOCIAL MEDIA',
    '',
    'Agency: Altmann + Pacreau',
    ContentDataMock.plantaFinBlocks
  );




  // Maxi Cash
  static maxiCashChristmasBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'maxi-cash-christmas/D15645 - Maxi Cash - Christmas VIDEO - HD 1280x720 - FA.mp4'),
    new ContentImageModel(this.rootAssets + 'maxi-cash-christmas/maxi_cash_christmas.jpg'),
    new ContentImageModel(this.rootAssets + 'maxi-cash-christmas/SG3006C_93_Maxi-Cash_left.JPG.db33758c6c196d9d8717cc1d788feb60.jpg')
  ];

  static maxiCashChristmas: ContentPageModel = new ContentPageModel(
    'MAXI CASH - The joy of giving',
    'Video, Wall Mural and Bus Wrap',
    'Agency: Adred Creative',
    ContentDataMock.maxiCashChristmasBlocks
  );


  static maxiCashPaynowBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'maxi-cash-paynow/D16436 - MAXI CASH PAYNOW VIDEO ANIMATION - 8.mp4')
  ];

  static maxiCashPaynow: ContentPageModel = new ContentPageModel(
    'MAXI CASH - PayNow',
    'Video to launch Paynow new service',
    'Agency: Adred Creative',
    ContentDataMock.maxiCashPaynowBlocks
  );


  // PTC
  static ptcBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'ptc/D15674 PTC - Video infographic transport fare increasement - 3.mp4')
  ];

  static ptc: ContentPageModel = new ContentPageModel(
    'PTC - Fare Increase',
    '',
    'Agency: Adred Creative',
    ContentDataMock.ptcBlocks
  );



  // Philips
  static philipsBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'philips/D15544 - Philips x Millenia walk event - A4 tent card.jpg'),
    new ContentImageModel(this.rootAssets + 'philips/D15568 - Philips Q4 end year festive celebration - V2- R3.jpg'),
    new ContentImageModel(this.rootAssets + 'philips/D15647 - Philips x Best Denki Grand electrical Fair - 6-01.jpg'),
    new ContentImageModel(this.rootAssets + 'philips/D15792 Philips Brand Fair x Best Denki Version 2 - A4 tentcard.jpg')
  ];

  static philips: ContentPageModel = new ContentPageModel(
    'Philips - A4 Tent Cards',
    '',
    'Agency: Adred Creative',
    ContentDataMock.philipsBlocks
  );


  // Rare

  static rareRealLifeBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'rare/rare_in_stitus.mp4'),
    new ContentImageModel(this.rootAssets + 'rare/IMG-20230218-WA0001_v2.jpg')
  ];

  static rareBlocks: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'rare/RARE DISEASES SOCIETY VIDEO - FA.mp4'),
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
    new ContentImageModel(this.rootAssets + 'wsg/Artboard 6.jpg'),
    new ContentImageModel(this.rootAssets + 'wsg/Artboard 7.jpg'),
    new ContentVideoModel(this.rootAssets + 'wsg/D15726 - WSG - Scholarship video - 4.mp4', '', 'video/mp4', true),
    new ContentVideoModel(this.rootAssets + 'wsg/D15759 - SSG-WSG SCHOLARSHIP TIKTOK VIDEO - FA.mp4'),
  ];

  static wsg: ContentPageModel = new ContentPageModel(
    'Workforce Singapore',
    'WSG - SSG - Joint undergraduate scholarship',
    'Agency: Adred Creative',
    ContentDataMock.wsgBlock
  );


  // NYC

  static nycBlock: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'nyc/Orange.png'),
    new ContentImageModel(this.rootAssets + 'nyc/bus.png'),
    new ContentImageModel(this.rootAssets + 'nyc/phone.png'),
    new ContentImageModel(this.rootAssets + 'nyc/leaflet.png'),
  ];

  static nyc: ContentPageModel = new ContentPageModel(
    'National youth council - young changemakers grant campaign',
    '',
    'Agency: Adred Creative',
    ContentDataMock.nycBlock
  );

  // SPC

  static spcBlock: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'spc/spc_bottle.jpg'),
  ];

  static spc: ContentPageModel = new ContentPageModel(
    'Singapore Petroleum Company',
    'Poster to promote their new mineral water recycled bottle',
    'Agency: Adred Creative',
    ContentDataMock.spcBlock
  );


  // XEPA

  static xepaBlock: ContentBlockModel[] = [
    new ContentVideoModel(this.rootAssets + 'xepa/D15760 XEPA - Cough TVC - 6 R3.mp4'),
  ];

  static xepa: ContentPageModel = new ContentPageModel(
    'XEPA - Cough Solutions',
    'TVC for Tussidex and Mucolix cough solutions',
    'Agency: Adred Creative',
    ContentDataMock.xepaBlock
  );



  // Anais Antoine

  static anaisAntoineBlock: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'anais-antoine/logo anais antoine-02.png'),
    new ContentImageModel(this.rootAssets + 'anais-antoine/FAIRE-PART-ENVELOPPE-MOCKUP.png'),
    new ContentImageModel(this.rootAssets + 'anais-antoine/Bifold-Brochure-Mockup.png'),
  ];

  static anaisAntoine: ContentPageModel = new ContentPageModel(
    'Anais & Antoine Announcement',
    'Logo, pattern and Announcement',
    '',
    ContentDataMock.anaisAntoineBlock
  );




  // petroleum
  static petroleumBlocks: ContentBlockModel[] = [
    new ContentImageModel(this.rootAssets + 'petroleum/scp_main.png'),
    new ContentImageModel(this.rootAssets + 'petroleum/hanging.png'),
    new ContentImageModel(this.rootAssets + 'petroleum/cover.png'),
    new ContentImageModel(this.rootAssets + 'petroleum/desktop.png')
  ];

  static petroleum: ContentPageModel = new ContentPageModel(
    'Singapore Petroleum Company - National Day Parade 2024',
    '',
    'Agency: Adred Creative',
    ContentDataMock.petroleumBlocks
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
    'anais-antoine': ContentDataMock.anaisAntoine,
    petroleum: ContentDataMock.petroleum
  };

}
