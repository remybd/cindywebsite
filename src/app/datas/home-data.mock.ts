import {EntryButtonModel} from '../home/models/entry-button.model';
import {ContentType} from './content-type.enum';

export class HomeDataMock {
  static preCurrentPagePath: string = '/content/';


  static entryButtonVerresNikon: EntryButtonModel = new EntryButtonModel('Nikon Verres Optiques', 'Totebag',
    ContentType.illustration,
    '/assets/img/home/toteBagNikon@2x.png',
    'nikon');

  static entryButtonTheErable: EntryButtonModel = new EntryButtonModel('Thé à l\'érable', 'Boite de Thé',
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

  static entryButtonCaisseEpargneSecuriteRoutiere: EntryButtonModel = new EntryButtonModel('Caisse d\'Épargne', 'Sécurité Routière',
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

  static entryButtonEnMouvement: EntryButtonModel = new EntryButtonModel('En mouvement', 'Maison d\'édition',
    ContentType.visualIdentity,
    '/assets/img/home/enMouvementBelAmiCover@2x.png',
    'en-mouvement');

  static entryButtonDentifrice: EntryButtonModel = new EntryButtonModel('3X/J', 'Kit de dentifrice pour enfants',
    ContentType.packaging,
    '/assets/img/home/dentifrice@2x.png',
    '');

  static entryButtonRencontresChoregraphie: EntryButtonModel = new EntryButtonModel('Rencontres chorégraphiques de sene saint-denis',
    'Affiches',
    ContentType.poster,
    '/assets/img/home/rencontreChoregraphieSeineSaintDenis@2x.png',
    '');


  static entryButtonAbbePierre: EntryButtonModel = new EntryButtonModel('"Fondation" Abbé Pierre',
    'Les Pics D\'or',
    ContentType.motionDesign,
    '/assets/img/home/abbe-pierre@2x.png',
    'abbe-pierre');

  static entryButtonNuitEau: EntryButtonModel = new EntryButtonModel('Unicef',
    'La nuit de l\'eau',
    ContentType.editon,
    '/assets/img/home/verre-deau-ok-clem@2x.png',
    'nuit-eau');


  static entryButtonCrazyHorse: EntryButtonModel = new EntryButtonModel('Crazy Horse',
    'Carte de voeux',
    ContentType.empty,
    '/assets/img/home/crazy-horse@2x.png',
    'crazy-horse');


  static entryButtonFondationDeFrance: EntryButtonModel = new EntryButtonModel('Fondation de France',
    'Covid19',
    ContentType.motionDesign,
    '/assets/img/home/fdf-covid@2x.png',
    'fdf-covid');

  static entryButtonArray = [
    HomeDataMock.entryButtonAbbePierre,
    HomeDataMock.entryButtonCaisseEpargneSecuriteRoutiere,
    HomeDataMock.entryButtonFondationDeFrance,
    HomeDataMock.entryButtonCaisseEpargneHandball,
    HomeDataMock.entryButtonVerresNikon,
    HomeDataMock.entryButtonCrazyHorse,
    HomeDataMock.entryButtonNuitEau,
    HomeDataMock.entryButtonTheErable,
    HomeDataMock.entryButtonEnMouvement,
    HomeDataMock.entryButtonCentrePompidou,
    /*    HomeDataMock.entryButtonRadioCanada,
        HomeDataMock.entryButtonAmbigu,
        HomeDataMock.entryButtonEpiderme,
        HomeDataMock.entryButtonDentifrice,
        HomeDataMock.entryButtonRencontresChoregraphie*/
  ];
}
