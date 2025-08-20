import {ContentPageModel} from "../content/models/content-page.model";
import {ContentSocialMediaModel} from "../content/models/content-social-media.model";
import {ContentImageCommentModel} from "../content/models/content-image-comment.model";
import {NextPreviousPageService} from "../structure/services/next-previous-page-management/next-previous-page.service";
import {HomeDataMock} from "./home-data.mock";
import {ContentVideoCommentModel} from "../content/models/content-video-comment.model";

// tslint:disable:max-line-length
export class SocialMediaDataMock {
  static rootAssets = '/assets/img/social-media/';

  // caring
  static caringSgMusic: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - Tuning into acts of care',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/music.gif', this.rootAssets + 'caring-sg/music_comments.png')],
    this.rootAssets + 'caring-sg/music.gif',
    'music'
  );
  static caringSgTree: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - Celebrate the Festive season',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/tree.gif', this.rootAssets + 'caring-sg/tree_comments.png')],
    this.rootAssets + 'caring-sg/tree.gif',
    'tree'
  );
  static caringSgWalk: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS -  Give a hand and make a difference',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/walk.gif', this.rootAssets + 'caring-sg/walk_comments.png')],
    this.rootAssets + 'caring-sg/walk.gif',
    'walk'
  );


  static caringSgElderly: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - No dry seats',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/elderly.png', this.rootAssets + 'caring-sg/elderly_comments.png')],
    this.rootAssets + 'caring-sg/elderly.png',
    'elderly'
  );
  static caringSgWheelChair: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - Give Thanks',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/wheel_chair.png', this.rootAssets + 'caring-sg/wheel_chair_comments.png')],
    this.rootAssets + 'caring-sg/wheel_chair.png',
    'wheel-chair'
  );
  static caringSgGivingWay: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - Giving Way',
    '',
    'Agency: Adred Creative',
    [
      new ContentImageCommentModel(this.rootAssets + 'caring-sg/giving_way1.png', this.rootAssets + 'caring-sg/giving_way_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'caring-sg/giving_way2.png', this.rootAssets + 'caring-sg/giving_way_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'caring-sg/giving_way3.png', this.rootAssets + 'caring-sg/giving_way_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'caring-sg/giving_way4.png', this.rootAssets + 'caring-sg/giving_way_comments.png')
    ],
    this.rootAssets + 'caring-sg/giving_way1.png',
    'giving-way'
  );


  static caringSgSheldon: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - Commuting with Sheldon',
    '',
    'Agency: Adred Creative',
    [new ContentVideoCommentModel(this.rootAssets + 'caring-sg/sheldon.mp4', this.rootAssets + 'caring-sg/sheldon_comments.png')],
    this.rootAssets + 'caring-sg/sheldon.png',
    'sheldon'
  );
  static caringSgWheelFatherSon: ContentSocialMediaModel = new ContentSocialMediaModel(
    'CARING SG COMMUTERS - Like father, like son',
    '',
    'Agency: Adred Creative',
    [new ContentVideoCommentModel(this.rootAssets + 'caring-sg/father_son.mp4', this.rootAssets + 'caring-sg/father_son_comments.png')],
    this.rootAssets + 'caring-sg/father_son.png',
    'father_son'
  );
  static caringSgTransportFares: ContentSocialMediaModel = new ContentSocialMediaModel(
    'PUBLIC TRANSPORT COUNCIL - FRE explainer',
    '',
    'Agency: Adred Creative',
    [new ContentVideoCommentModel(this.rootAssets + 'caring-sg/transport_fares.mp4', this.rootAssets + 'caring-sg/transport_fares_comments.png')],
    this.rootAssets + 'caring-sg/transport_fares.png',
    'transport_fares'
  );

  // baush and lomb
  static baushLombHydrating: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Ultra One Day',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'baush-lomb/hydrating.png', this.rootAssets + 'baush-lomb/hydrating_comments.png')],
    this.rootAssets + 'baush-lomb/hydrating.png',
    'hydrating'
  );
  static baushLombLightweight: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Ultra One Day',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'baush-lomb/lightweight.png', this.rootAssets + 'baush-lomb/lightweight_comments.png')],
    this.rootAssets + 'baush-lomb/lightweight.png',
    'lightweight'
  );
  static baushLombProtective: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Ultra One Day',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'baush-lomb/protective.png', this.rootAssets + 'baush-lomb/protective_comments.png')],
    this.rootAssets + 'baush-lomb/protective.png',
    'protective'
  );


  static baushLombEyesOnYou: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Lacelle',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'baush-lomb/eyes_on_you.jpg', this.rootAssets + 'baush-lomb/eyes_on_you_comments.png')],
    this.rootAssets + 'baush-lomb/eyes_on_you.jpg',
    'eyes-on-you'
  );
  static baushLombCatchEye: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Lacelle',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'baush-lomb/catch_eye.jpg', this.rootAssets + 'baush-lomb/catch_eye_comments.png')],
    this.rootAssets + 'baush-lomb/catch_eye.jpg',
    'catch-eye'
  );
  static baushLombSing: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Lacelle',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'baush-lomb/sing.jpg', this.rootAssets + 'baush-lomb/sing_comments.png')],
    this.rootAssets + 'baush-lomb/sing.jpg',
    'sing'
  );


  // heart-foundation
  static heartFoundationLove: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE HEART FOUNDATION - Love trend',
    '',
    'Agency: Adred Creative',
    [new ContentVideoCommentModel(this.rootAssets + 'heart-foundation/love.mp4', this.rootAssets + 'heart-foundation/love_comments.png')],
    this.rootAssets + 'heart-foundation/love.png',
    'love'
  );
  static heartFoundationPump: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE HEART FOUNDATION - Hugo Pump Challenge',
    '',
    'Agency: Adred Creative',
    [new ContentVideoCommentModel(this.rootAssets + 'heart-foundation/pump.mp4', this.rootAssets + 'heart-foundation/pump_comments.png')],
    this.rootAssets + 'heart-foundation/pump.png',
    'pump'
  );


  // workforce singapore
  static workforceSingapore: ContentSocialMediaModel = new ContentSocialMediaModel(
    'WORKFORCE SINGAPORE - SSG-WSG Joint Undergraduate Scholarship',
    '',
    'Agency: Adred Creative',
    [new ContentVideoCommentModel('/assets/img/content/wsg/D15759 - SSG-WSG SCHOLARSHIP TIKTOK VIDEO - FA.mp4', this.rootAssets + 'workforce-singapore/workforce-singapore_comments.png')],
    this.rootAssets + 'workforce-singapore/workforce-singapore.png',
    'workforce-singapore'
  );


  // polytechnic alumni
  static polytechnicEveryW: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE POLYTECHNIC ALUMNI - Take every W',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'polytechnic/every_w.gif', this.rootAssets + 'polytechnic/every_w_comments.png')],
    this.rootAssets + 'polytechnic/every_w.gif',
    'every_w'
  );
  static polytechnicDeepavali: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE POLYTECHNIC ALUMNI - Happy Deepavali',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'polytechnic/deepavali.png', this.rootAssets + 'polytechnic/deepavali_comments.png')],
    this.rootAssets + 'polytechnic/deepavali.png',
    'deepavali'
  );
  static polytechnicDellaPearce: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE POLYTECHNIC ALUMNI - Della Pearce Spotlight',
    '',
    'Agency: Adred Creative',
    [
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/della_pearce1.png', this.rootAssets + 'polytechnic/della_pearce_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/della_pearce2.png', this.rootAssets + 'polytechnic/della_pearce_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/della_pearce3.png', this.rootAssets + 'polytechnic/della_pearce_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/della_pearce4.png', this.rootAssets + 'polytechnic/della_pearce_comments.png'),
    ],
    this.rootAssets + 'polytechnic/della_pearce1.png',
    'della_pearce'
  );
  static polytechnicNightmares: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE POLYTECHNIC ALUMNI - Workplace Culture Nightmares',
    '',
    'Agency: Adred Creative',
    [
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/nightmares1.png', this.rootAssets + 'polytechnic/nightmares_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/nightmares2.png', this.rootAssets + 'polytechnic/nightmares_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/nightmares3.png', this.rootAssets + 'polytechnic/nightmares_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/nightmares4.png', this.rootAssets + 'polytechnic/nightmares_comments.png'),
    ],
    this.rootAssets + 'polytechnic/nightmares1.png',
    'nightmares'
  );
  static polytechnicUnrelatedStudies: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE POLYTECHNIC ALUMNI - New job',
    '',
    'Agency: Adred Creative',
    [
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/unrelated_studies1.png', this.rootAssets + 'polytechnic/unrelated_studies_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/unrelated_studies2.png', this.rootAssets + 'polytechnic/unrelated_studies_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/unrelated_studies3.png', this.rootAssets + 'polytechnic/unrelated_studies_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/unrelated_studies4.png', this.rootAssets + 'polytechnic/unrelated_studies_comments.png')
    ],
    this.rootAssets + 'polytechnic/unrelated_studies1.png',
    'unrelated_studies'
  );
  static polytechnicDigitalFootprint: ContentSocialMediaModel = new ContentSocialMediaModel(
    'SINGAPORE POLYTECHNIC ALUMNI - Digital footprint',
    '',
    'Agency: Adred Creative',
    [
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/digital_footprint1.png', this.rootAssets + 'polytechnic/digital_footprint_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/digital_footprint2.png', this.rootAssets + 'polytechnic/digital_footprint_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/digital_footprint3.png', this.rootAssets + 'polytechnic/digital_footprint_comments.png'),
      new ContentImageCommentModel(this.rootAssets + 'polytechnic/digital_footprint4.png', this.rootAssets + 'polytechnic/digital_footprint_comments.png'),
    ],
    this.rootAssets + 'polytechnic/digital_footprint1.png',
    'digital_footprint'
  );

  static socialMediaDic = {
    'music': SocialMediaDataMock.caringSgMusic,
    'tree': SocialMediaDataMock.caringSgTree,
    'walk': SocialMediaDataMock.caringSgWalk,

    'hydrating': SocialMediaDataMock.baushLombHydrating,
    'protective': SocialMediaDataMock.baushLombProtective,
    'lightweight': SocialMediaDataMock.baushLombLightweight,

    'love': SocialMediaDataMock.heartFoundationLove,
    'pump': SocialMediaDataMock.heartFoundationPump,
    'workforce-singapore': SocialMediaDataMock.workforceSingapore,

    'elderly': SocialMediaDataMock.caringSgElderly,
    'wheel-chair': SocialMediaDataMock.caringSgWheelChair,
    'giving-way': SocialMediaDataMock.caringSgGivingWay,

    'sheldon': SocialMediaDataMock.caringSgSheldon,
    'father_son': SocialMediaDataMock.caringSgWheelFatherSon,
    'transport_fares': SocialMediaDataMock.caringSgTransportFares,

    'eyes-on-you': SocialMediaDataMock.baushLombEyesOnYou,
    'catch-eye': SocialMediaDataMock.baushLombCatchEye,
    'sing': SocialMediaDataMock.baushLombSing,

    'every_w': SocialMediaDataMock.polytechnicEveryW,
    'deepavali': SocialMediaDataMock.polytechnicDeepavali,
    'della_pearce': SocialMediaDataMock.polytechnicDellaPearce,

    'nightmares': SocialMediaDataMock.polytechnicNightmares,
    'unrelated_studies': SocialMediaDataMock.polytechnicUnrelatedStudies,
    'digital_footprint': SocialMediaDataMock.polytechnicDigitalFootprint,
  };

  static getKeysFromSocialMediaDic() {
    return Object.keys(SocialMediaDataMock.socialMediaDic).map((key) => ({'key': key}));
  }

  static setupNextPreviousService(nextPreviousPageService: NextPreviousPageService) {
    nextPreviousPageService.routePrefix = HomeDataMock.socialMediaPath;
    nextPreviousPageService.keyList = SocialMediaDataMock.getKeysFromSocialMediaDic();
  }
}
