import {EntryButtonModel} from '../home/models/entry-button.model';
import {CategoryType} from './category';

export class HomeDataMock {
  public static contentPagePath = '/content/';
  public static categoryPagePath = '/category/';


  static entryButtonVerresNikon: EntryButtonModel = new EntryButtonModel('Nikon Lenswear', 'Tote bag',
    [],
    '/assets/img/home/toteBagNikon@2x.png',
    'nikon');

  static entryButtonTheErable: EntryButtonModel = new EntryButtonModel('Maple tea', 'Tea box',
    [],
    '/assets/img/home/theErable@2x.png',
    'the-erable');

  static entryButtonCentrePompidou: EntryButtonModel = new EntryButtonModel('Centre Pompidou', 'Brochure',
    [],
    '/assets/img/home/centrePompidou@2x.png',
    'pompidou');

  static entryButtonCaisseEpargneHandball: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Handball',
    [],
    '/assets/img/home/caisseEpargneHandball@2x.png',
    'caisse-epargne-handball');

  static entryButtonCaisseEpargneSecuriteRoutiere: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Safety road',
    [],
    '/assets/img/home/ce-pre-vention-routie-re-img@2x.png',
    'caisse-epargne-securite-routiere');

  static entryButtonRadioCanada: EntryButtonModel = new EntryButtonModel('Ici radio Canada', '',
    [],
    '/assets/img/home/radioCanadaStructureEtVariation@2x.png',
    '');

  static entryButtonAmbigu: EntryButtonModel = new EntryButtonModel('Ambigü', 'Magazine',
    [],
    '/assets/img/home/ambigu@2x.png',
    '');

  static entryButtonEpiderme: EntryButtonModel = new EntryButtonModel('Épiderme', 'Magazine',
    [],
    '/assets/img/home/epiderme@2x.png',
    '');

  static entryButtonEnMouvement: EntryButtonModel = new EntryButtonModel('En mouvement', 'Publishing company',
    [],
    '/assets/img/home/enMouvementBelAmiCover@2x.png',
    'en-mouvement');

  static entryButtonDentifrice: EntryButtonModel = new EntryButtonModel('3X/J', 'Dental first kid\'s kit',
    [],
    '/assets/img/home/dentifrice@2x.png',
    '3xj-dentifrice');


  static entryButtonAbbePierre: EntryButtonModel = new EntryButtonModel('Fondation Abbé Pierre',
    'Les Pics D\'or',
    [CategoryType.motionDesign],
    '/assets/img/home/abbe-pierre@2x.png',
    'abbe-pierre');

  static entryButtonNuitEau: EntryButtonModel = new EntryButtonModel('Unicef',
    'La nuit de l\'eau',
    [],
    '/assets/img/home/verre-deau-ok-clem@2x.png',
    'nuit-eau');


  static entryButtonCrazyHorse: EntryButtonModel = new EntryButtonModel('Crazy Horse',
    'Greeting card',
    [],
    '/assets/img/home/crazy-horse@2x.png',
    'crazy-horse');


  static entryButtonFondationDeFrance: EntryButtonModel = new EntryButtonModel('Fondation de France',
    'Covid19',
    [CategoryType.motionDesign],
    '/assets/img/home/fdf-covid@2x.png',
    'fdf-covid');

  static entryButtonCroixRouge: EntryButtonModel = new EntryButtonModel('French Red Cross',
    'Call for donations',
    [],
    '/assets/img/home/croix-rouge@2x.png',
    'croix-rouge');

  static entryButtonFranceGalop: EntryButtonModel = new EntryButtonModel('France Galop',
    '2019 Campaign',
    [CategoryType.motionDesign],
    '/assets/img/home/france-galop@2x.png',
    'france-galop');

  static entryButtonPetitNavire: EntryButtonModel = new EntryButtonModel('Petit Navire',
    '2020 Campaign',
    [CategoryType.motionDesign],
    '/assets/img/home/petit_navire.png',
    'petit-navire');

  static entryButtonLapeyrePro: EntryButtonModel = new EntryButtonModel('Lapeyre Pro',
    '360 Communication',
    [CategoryType.motionDesign],
    '/assets/img/home/lapeyre-pro@2x.png',
    'lapeyre-pro');

  static entryButtonLapeyre: EntryButtonModel = new EntryButtonModel('Lapeyre',
    '360 Communication',
    [CategoryType.motionDesign],
    '/assets/img/home/lapeyre@2x.png',
    'lapeyre');

  static entryButtonLescure: EntryButtonModel = new EntryButtonModel('Maison Lescure',
    '',
    [CategoryType.motionDesign],
    '/assets/img/home/lescure.png',
    'lescure');

  static entryButtonNaturalia: EntryButtonModel = new EntryButtonModel('Naturalia',
    'Local Campaign',
    [CategoryType.motionDesign],
    '/assets/img/home/naturalia.png',
    'naturalia');

  static entryButtonOpel: EntryButtonModel = new EntryButtonModel('Opel',
    '360 Communication',
    [CategoryType.motionDesign],
    '/assets/img/home/opel.png',
    'opel');

  static entryButtonPlantaFin: EntryButtonModel = new EntryButtonModel('Planta Fin',
    '',
    [CategoryType.motionDesign],
    '/assets/img/home/planta-fin.png',
    'planta-fin');

  static entryButtonCaisseEpargneParis2024: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne',
    'Paris 2024',
    [CategoryType.motionDesign],
    '/assets/img/home/caisse-epargne-paris-2024.png',
    'caisse-epargne-paris-2024');

  static entryButtonMaxiCashChristmas: EntryButtonModel = new EntryButtonModel('Maxi Cash',
    'Christmas 2022',
    [CategoryType.motionDesign],
    '/assets/img/home/maxi_cash_joy_of_giving.png',
    'maxi-cash-christmas');

  static entryButtonMaxiCashPaynow: EntryButtonModel = new EntryButtonModel('Maxi Cash',
    'Paynow',
    [CategoryType.motionDesign],
    '/assets/img/home/maxi_cash_paynow_video.png',
    'maxi-cash-paynow');

  static entryButtonPTC: EntryButtonModel = new EntryButtonModel('PTC',
    'Fare Increase',
    [CategoryType.motionDesign],
    '/assets/img/home/PTC_video_fare_increase.png',
    'ptc');

  static entryButtonPhilips: EntryButtonModel = new EntryButtonModel('Philips',
    'A4 Tent Cards',
    [],
    '/assets/img/home/philips.png',
    'philips');

  static entryButtonRare: EntryButtonModel = new EntryButtonModel('Rare',
    'Light Up for Rare',
    [CategoryType.motionDesign],
    '/assets/img/home/rare_video.png',
    'rare');

  static entryButtonSPC: EntryButtonModel = new EntryButtonModel('SPC',
    'New Mineral Water',
    [],
    '/assets/img/home/spc.png',
    'spc');

  static entryButtonNyc: EntryButtonModel = new EntryButtonModel('NYC',
    'Young ChangeMakers Grant',
    [],
    '/assets/img/home/nyc.png',
    'nyc');

  static entryButtonWSG: EntryButtonModel = new EntryButtonModel('WSG',
    'WSG-SSG-Joint undergraduate scholarship',
    [CategoryType.motionDesign],
    '/assets/img/home/wsg.png',
    'wsg');

  static entryButtonXepa: EntryButtonModel = new EntryButtonModel('Xepa',
    'Cough Solutions',
    [],
    '/assets/img/home/xepa.png',
    'xepa');

  static entryButtonAnaisAntoine: EntryButtonModel = new EntryButtonModel('Anais and Antoine',
    '',
    [],
    '/assets/img/home/faire-part-antoine-anais.png',
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
}
