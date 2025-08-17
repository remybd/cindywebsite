import {ContentPageModel} from "../content/models/content-page.model";
import {ContentSocialMediaModel} from "../content/models/content-social-media.model";
import {ContentImageCommentModel} from "../content/models/content-image-comment.model";
import {NextPreviousPageService} from "../structure/services/next-previous-page-management/next-previous-page.service";
import {HomeDataMock} from "./home-data.mock";

export class SocialMediaDataMock {
  static rootAssets = '/assets/img/social-media/';

  // caring
  static caringSgMusic: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caring SG Commuters - Tuning into acts of care',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/music.gif', this.rootAssets + 'caring-sg/music_comments.png')],
    this.rootAssets + 'caring-sg/music.gif',
    'music'
  );
  static caringSgTree: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caring SG Commuters - Celebrate the Festive season',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/tree.gif', this.rootAssets + 'caring-sg/tree_comments.png')],
    this.rootAssets + 'caring-sg/tree.gif',
    'tree'
  );
  static caringSgWalk: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caring SG Commuters -  Give a hand and make a difference',
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
    [new ContentImageCommentModel(this.rootAssets + 'caring-sg/giving_way.png', this.rootAssets + 'caring-sg/giving_way_comments.png')],
    this.rootAssets + 'caring-sg/giving_way.png',
    'giving-way'
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
    [new ContentImageCommentModel(this.rootAssets + 'heart-foundation/love.jpg', this.rootAssets + 'heart-foundation/love_comments.png')],
    this.rootAssets + 'heart-foundation/love.jpg',
    'love'
  );
  static heartFoundationPump: ContentSocialMediaModel = new ContentSocialMediaModel(
    'BAUSCH & LOMB - Lacelle',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel(this.rootAssets + 'heart-foundation/pump.jpg', this.rootAssets + 'heart-foundation/pump_comments.png')],
    this.rootAssets + 'heart-foundation/pump.jpg',
    'pump'
  );

  static socialMediaDic = {
    'music': SocialMediaDataMock.caringSgMusic,
    'tree': SocialMediaDataMock.caringSgTree,
    'walk': SocialMediaDataMock.caringSgWalk,
    'hydrating': SocialMediaDataMock.baushLombHydrating,
    'protective': SocialMediaDataMock.baushLombProtective,
    'lightweight': SocialMediaDataMock.baushLombLightweight,
    'elderly': SocialMediaDataMock.caringSgElderly,
    'wheel-chair': SocialMediaDataMock.caringSgWheelChair,
    'giving-way': SocialMediaDataMock.caringSgGivingWay,
    'eyes-on-you': SocialMediaDataMock.baushLombEyesOnYou,
    'catch-eye': SocialMediaDataMock.baushLombCatchEye,
    'sing': SocialMediaDataMock.baushLombSing,
  };

  static getKeysFromSocialMediaDic() {
    return Object.keys(SocialMediaDataMock.socialMediaDic).map((key) => ({'key': key}));
  }

  static setupNextPreviousService(nextPreviousPageService: NextPreviousPageService) {
    nextPreviousPageService.routePrefix = HomeDataMock.socialMediaPath;
    nextPreviousPageService.keyList = SocialMediaDataMock.getKeysFromSocialMediaDic();
  }
}
