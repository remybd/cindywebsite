import {EntryButtonModel} from '../home/models/entry-button.model';
import {ContentType} from './content-type.enum';

export class HomeDataMock {
  static preCurrentPagePath: string = '/content/';


  static entryButtonVerresNikon: EntryButtonModel = new EntryButtonModel('Nikon Lenswear', 'Tote bag',
    ContentType.illustration,
    '/assets/img/home/toteBagNikon@2x.png',
    'nikon');

  static entryButtonTheErable: EntryButtonModel = new EntryButtonModel('Maple tea', 'Tea box',
    ContentType.packaging,
    '/assets/img/home/theErable@2x.png',
    'the-erable');

  static entryButtonCentrePompidou: EntryButtonModel = new EntryButtonModel('Centre Pompidou', 'Brochure',
    ContentType.editon,
    '/assets/img/home/centrePompidou@2x.png',
    'pompidou');

  static entryButtonCaisseEpargneHandball: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Handball',
    ContentType.poster,
    '/assets/img/home/caisseEpargneHandball@2x.png',
    'caisse-epargne-handball');

  static entryButtonCaisseEpargneSecuriteRoutiere: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Safety road',
    ContentType.poster,
    '/assets/img/home/ce-pre-vention-routie-re-img@2x.png',
    'caisse-epargne-securite-routiere');

  static entryButtonRadioCanada: EntryButtonModel = new EntryButtonModel('Ici radio Canada', '',
    ContentType.poster,
    '/assets/img/home/radioCanadaStructureEtVariation@2x.png',
    '');

  static entryButtonAmbigu: EntryButtonModel = new EntryButtonModel('Ambigü', 'Magazine',
    ContentType.editon,
    '/assets/img/home/ambigu@2x.png',
    '');

  static entryButtonEpiderme: EntryButtonModel = new EntryButtonModel('Épiderme', 'Magazine',
    ContentType.editon,
    '/assets/img/home/epiderme@2x.png',
    '');

  static entryButtonEnMouvement: EntryButtonModel = new EntryButtonModel('En mouvement', 'Publishing company',
    ContentType.visualIdentity,
    '/assets/img/home/enMouvementBelAmiCover@2x.png',
    'en-mouvement');

  static entryButtonDentifrice: EntryButtonModel = new EntryButtonModel('3X/J', 'Dental first kid\'s kit',
    ContentType.packaging,
    '/assets/img/home/dentifrice@2x.png',
    '3xj-dentifrice');


  static entryButtonAbbePierre: EntryButtonModel = new EntryButtonModel('Fondation Abbé Pierre',
    'Les Pics D\'or',
    ContentType.affichesAndMotionDesgin,
    '/assets/img/home/abbe-pierre@2x.png',
    'abbe-pierre');

  static entryButtonNuitEau: EntryButtonModel = new EntryButtonModel('Unicef',
    'La nuit de l\'eau',
    ContentType.editon,
    '/assets/img/home/verre-deau-ok-clem@2x.png',
    'nuit-eau');


  static entryButtonCrazyHorse: EntryButtonModel = new EntryButtonModel('Crazy Horse',
    'Greeting card',
    ContentType.empty,
    '/assets/img/home/crazy-horse@2x.png',
    'crazy-horse');


  static entryButtonFondationDeFrance: EntryButtonModel = new EntryButtonModel('Fondation de France',
    'Covid19',
    ContentType.motionDesign,
    '/assets/img/home/fdf-covid@2x.png',
    'fdf-covid');

  static entryButtonCroixRouge: EntryButtonModel = new EntryButtonModel('French Red Cross',
    'Call for donations',
    ContentType.poster,
    '/assets/img/home/croix-rouge@2x.png',
    'croix-rouge');

  static entryButtonFranceGalop: EntryButtonModel = new EntryButtonModel('France Galop',
    '2019 Campaign',
    ContentType.affichesAndMotionDesgin,
    '/assets/img/home/france-galop@2x.png',
    'france-galop');

  static entryButtonPetitNavire: EntryButtonModel = new EntryButtonModel('Petit Navire',
    '2020 Campaign',
    ContentType.affichesAndMotionDesgin,
    '/assets/img/home/petit_navire.png',
    'petit-navire');

  static entryButtonLapeyrePro: EntryButtonModel = new EntryButtonModel('Lapeyre Pro',
    '360 Communication',
    ContentType.affichesAndMotionDesgin,
    '/assets/img/home/lapeyre-pro@2x.png',
    'lapeyre-pro');

  static entryButtonLapeyre: EntryButtonModel = new EntryButtonModel('Lapeyre',
    '360 Communication',
    ContentType.affichesAndMotionDesgin,
    '/assets/img/home/lapeyre@2x.png',
    'lapeyre');

  static entryButtonLescure: EntryButtonModel = new EntryButtonModel('Maison Lescure',
    '',
    ContentType.motionDesign,
    '/assets/img/home/lescure.png',
    'lescure');

  static entryButtonNaturalia: EntryButtonModel = new EntryButtonModel('Naturalia',
    'Local Campaign',
    ContentType.motionDesign,
    '/assets/img/home/naturalia.png',
    'naturalia');

  static entryButtonOpel: EntryButtonModel = new EntryButtonModel('Opel',
    '360 Communication',
    ContentType.motionDesign,
    '/assets/img/home/opel.png',
    'opel');

  static entryButtonPlantaFin: EntryButtonModel = new EntryButtonModel('Planta Fin',
    '',
    ContentType.motionDesign,
    '/assets/img/home/planta-fin.png',
    'planta-fin');

  static entryButtonCaisseEpargneParis2024: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne',
    'Paris 2024',
    ContentType.motionDesign,
    '/assets/img/home/caisse-epargne-paris-2024.png',
    'caisse-epargne-paris-2024');

  static entryButtonArray = [
    HomeDataMock.entryButtonFranceGalop,
    HomeDataMock.entryButtonPetitNavire,
    HomeDataMock.entryButtonLapeyre,
    HomeDataMock.entryButtonLapeyrePro,
    HomeDataMock.entryButtonAbbePierre,
    HomeDataMock.entryButtonCaisseEpargneParis2024,
    HomeDataMock.entryButtonCaisseEpargneSecuriteRoutiere,
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
