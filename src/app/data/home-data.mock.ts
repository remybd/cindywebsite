import {EntryButtonModel} from '../home/models/entry-button.model';
import {CategoryType} from './category';
import {NextPreviousPageService} from "../structure/services/next-previous-page-management/next-previous-page.service";

export class HomeDataMock {
  public static contentPagePath = '/content/';
  public static socialMediaPath = '/social-media/';
  static rootAssets = '/assets/img/home/';


  static entryButtonVerresNikon: EntryButtonModel = new EntryButtonModel('Nikon Lenswear', 'Tote bag',
    [],
    this.rootAssets + 'toteBagNikon@2x.png',
    'nikon');

  static entryButtonTheErable: EntryButtonModel = new EntryButtonModel('Maple tea', 'Tea box',
    [],
    this.rootAssets + 'theErable@2x.png',
    'the-erable');

  static entryButtonCentrePompidou: EntryButtonModel = new EntryButtonModel('Centre Pompidou', 'Brochure',
    [],
    this.rootAssets + 'centrePompidou@2x.png',
    'pompidou');

  static entryButtonCaisseEpargneHandball: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Handball',
    [CategoryType.campaign360],
    this.rootAssets + 'caisseEpargneHandball@2x.png',
    'caisse-epargne-handball');

  static entryButtonCaisseEpargneSecuriteRoutiere: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Safety road',
    [CategoryType.campaign360],
    this.rootAssets + 'ce-pre-vention-routie-re-img@2x.png',
    'caisse-epargne-securite-routiere');

  static entryButtonRadioCanada: EntryButtonModel = new EntryButtonModel('Ici radio Canada', '',
    [],
    this.rootAssets + 'radioCanadaStructureEtVariation@2x.png',
    '');

  static entryButtonAmbigu: EntryButtonModel = new EntryButtonModel('Ambigü', 'Magazine',
    [],
    this.rootAssets + 'ambigu@2x.png',
    '');

  static entryButtonEpiderme: EntryButtonModel = new EntryButtonModel('Épiderme', 'Magazine',
    [],
    this.rootAssets + 'epiderme@2x.png',
    '');

  static entryButtonEnMouvement: EntryButtonModel = new EntryButtonModel('En mouvement', 'Publishing company',
    [],
    this.rootAssets + 'enMouvementBelAmiCover@2x.png',
    'en-mouvement');

  static entryButtonDentifrice: EntryButtonModel = new EntryButtonModel('3X/J', 'Dental first kid\'s kit',
    [],
    this.rootAssets + 'dentifrice@2x.png',
    '3xj-dentifrice');


  static entryButtonAbbePierre: EntryButtonModel = new EntryButtonModel('Fondation Abbé Pierre',
    'Les Pics D\'or',
    [CategoryType.campaign360, CategoryType.motionDesign],
    this.rootAssets + 'abbe-pierre@2x.png',
    'abbe-pierre');

  static entryButtonNuitEau: EntryButtonModel = new EntryButtonModel('Unicef',
    'La nuit de l\'eau',
    [],
    this.rootAssets + 'verre-deau-ok-clem@2x.png',
    'nuit-eau');


  static entryButtonCrazyHorse: EntryButtonModel = new EntryButtonModel('Crazy Horse',
    'Greeting card',
    [],
    this.rootAssets + 'crazy-horse@2x.png',
    'crazy-horse');


  static entryButtonFondationDeFrance: EntryButtonModel = new EntryButtonModel('Fondation de France',
    'Covid19',
    [CategoryType.motionDesign],
    this.rootAssets + 'fdf-covid@2x.png',
    'fdf-covid');

  static entryButtonCroixRouge: EntryButtonModel = new EntryButtonModel('French Red Cross',
    'Call for donations',
    [CategoryType.campaign360,],
    this.rootAssets + 'croix-rouge@2x.png',
    'croix-rouge');

  static entryButtonFranceGalop: EntryButtonModel = new EntryButtonModel('France Galop',
    '2019 Campaign',
    [CategoryType.campaign360, CategoryType.motionDesign],
    this.rootAssets + 'france-galop@2x.png',
    'france-galop');

  static entryButtonPetitNavire: EntryButtonModel = new EntryButtonModel('Petit Navire',
    '2020 Campaign',
    [CategoryType.campaign360, CategoryType.motionDesign],
    this.rootAssets + 'petit_navire.png',
    'petit-navire');

  static entryButtonLapeyrePro: EntryButtonModel = new EntryButtonModel('Lapeyre Pro',
    '360 Communication',
    [CategoryType.campaign360],
    this.rootAssets + 'lapeyre-pro@2x.png',
    'lapeyre-pro');

  static entryButtonLapeyre: EntryButtonModel = new EntryButtonModel('Lapeyre',
    '360 Communication',
    [CategoryType.campaign360, CategoryType.motionDesign],
    this.rootAssets + 'lapeyre@2x.png',
    'lapeyre');

  static entryButtonLescure: EntryButtonModel = new EntryButtonModel('Maison Lescure',
    '',
    [CategoryType.motionDesign],
    this.rootAssets + 'lescure.png',
    'lescure');

  static entryButtonNaturalia: EntryButtonModel = new EntryButtonModel('Naturalia',
    'Local Campaign',
    [CategoryType.motionDesign],
    this.rootAssets + 'naturalia.png',
    'naturalia');

  static entryButtonOpel: EntryButtonModel = new EntryButtonModel('Opel',
    '360 Communication',
    [CategoryType.motionDesign],
    this.rootAssets + 'opel.png',
    'opel');

  static entryButtonPlantaFin: EntryButtonModel = new EntryButtonModel('Planta Fin',
    '',
    [CategoryType.motionDesign],
    this.rootAssets + 'planta-fin.png',
    'planta-fin');

  static entryButtonCaisseEpargneParis2024: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne',
    'Paris 2024',
    [CategoryType.motionDesign],
    this.rootAssets + 'caisse-epargne-paris-2024.png',
    'caisse-epargne-paris-2024');

  static entryButtonMaxiCashChristmas: EntryButtonModel = new EntryButtonModel('Maxi Cash',
    'Christmas 2022',
    [CategoryType.motionDesign],
    this.rootAssets + 'maxi_cash_joy_of_giving.png',
    'maxi-cash-christmas');

  static entryButtonMaxiCashPaynow: EntryButtonModel = new EntryButtonModel('Maxi Cash',
    'Paynow',
    [CategoryType.motionDesign],
    this.rootAssets + 'maxi_cash_paynow_video.png',
    'maxi-cash-paynow');

  static entryButtonPTC: EntryButtonModel = new EntryButtonModel('PTC',
    'Fare Increase',
    [CategoryType.motionDesign],
    this.rootAssets + 'PTC_video_fare_increase.png',
    'ptc');

  static entryButtonPhilips: EntryButtonModel = new EntryButtonModel('Philips',
    'A4 Tent Cards',
    [CategoryType.campaign360,],
    this.rootAssets + 'philips.png',
    'philips');

  static entryButtonRare: EntryButtonModel = new EntryButtonModel('Rare',
    'Light Up for Rare',
    [CategoryType.motionDesign],
    this.rootAssets + 'rare_video.png',
    'rare');

  static entryButtonSPC: EntryButtonModel = new EntryButtonModel('SPC',
    'New Mineral Water',
    [CategoryType.campaign360,],
    this.rootAssets + 'spc.png',
    'spc');

  static entryButtonNyc: EntryButtonModel = new EntryButtonModel('NYC',
    'Young ChangeMakers Grant',
    [CategoryType.campaign360,],
    this.rootAssets + 'nyc.png',
    'nyc');

  static entryButtonWSG: EntryButtonModel = new EntryButtonModel('WSG',
    'WSG-SSG-Joint undergraduate scholarship',
    [CategoryType.campaign360, CategoryType.motionDesign],
    this.rootAssets + 'wsg.png',
    'wsg');

  static entryButtonXepa: EntryButtonModel = new EntryButtonModel('Xepa',
    'Cough Solutions',
    [CategoryType.motionDesign],
    this.rootAssets + 'xepa.png',
    'xepa');

  static entryButtonAnaisAntoine: EntryButtonModel = new EntryButtonModel('Anais and Antoine',
    '',
    [],
    this.rootAssets + 'faire-part-antoine-anais.png',
    'anais-antoine');

  static entryButtonArray = [
    HomeDataMock.entryButtonFranceGalop,
    HomeDataMock.entryButtonPetitNavire,
    HomeDataMock.entryButtonCaisseEpargneSecuriteRoutiere,
    HomeDataMock.entryButtonCaisseEpargneParis2024,
    HomeDataMock.entryButtonLapeyre,
    HomeDataMock.entryButtonLapeyrePro,
    HomeDataMock.entryButtonAbbePierre,
    HomeDataMock.entryButtonXepa,
    HomeDataMock.entryButtonNyc,
    HomeDataMock.entryButtonSPC,
    HomeDataMock.entryButtonWSG,
    HomeDataMock.entryButtonMaxiCashChristmas,
    HomeDataMock.entryButtonMaxiCashPaynow,
    HomeDataMock.entryButtonPTC,
    HomeDataMock.entryButtonRare,
    HomeDataMock.entryButtonPhilips,
    HomeDataMock.entryButtonAnaisAntoine,
    HomeDataMock.entryButtonLescure,
    HomeDataMock.entryButtonNaturalia,
    HomeDataMock.entryButtonOpel,
    HomeDataMock.entryButtonPlantaFin,
    HomeDataMock.entryButtonFondationDeFrance,
    HomeDataMock.entryButtonCroixRouge,
    HomeDataMock.entryButtonCaisseEpargneHandball,
    HomeDataMock.entryButtonVerresNikon,
    HomeDataMock.entryButtonDentifrice,
    HomeDataMock.entryButtonCrazyHorse,
    HomeDataMock.entryButtonNuitEau,
    HomeDataMock.entryButtonTheErable,
    HomeDataMock.entryButtonEnMouvement,
    HomeDataMock.entryButtonCentrePompidou
  ];

  static setupNextPreviousService(nextPreviousPageService: NextPreviousPageService) {
    nextPreviousPageService.routePrefix = HomeDataMock.contentPagePath;
    nextPreviousPageService.keyList = HomeDataMock.entryButtonArray;
  }
}
