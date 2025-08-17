import {ContentPageModel} from "../content/models/content-page.model";
import {ContentSocialMediaModel} from "../content/models/content-social-media.model";
import {ContentImageCommentModel} from "../content/models/content-image-comment.model";
import {NextPreviousPageService} from "../structure/services/next-previous-page-management/next-previous-page.service";
import {HomeDataMock} from "./home-data.mock";

export class SocialMediaDataMock {
  static rootAssets = '/assets/img/social-media/';

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

  static baushLombHydrating: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    '',
    'Agency: Adred Creative',
    [],
    this.rootAssets + 'baush-lomb/hydrating.png',
    'hydrating'
  );
  static baushLombLightweight: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    '',
    'Agency: Adred Creative',
    [],
    this.rootAssets + 'baush-lomb/lightweight.png',
    'lightweight'
  );
  static baushLombProtective: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    '',
    'Agency: Adred Creative',
    [],
    this.rootAssets + 'baush-lomb/protective.png',
    'protective'
  );

  static socialMediaDic = {
    'music': SocialMediaDataMock.caringSgMusic,
    'tree': SocialMediaDataMock.caringSgTree,
    'walk': SocialMediaDataMock.caringSgWalk,
    'hydrating': SocialMediaDataMock.baushLombHydrating,
    'lightweight': SocialMediaDataMock.baushLombLightweight,
    'protective': SocialMediaDataMock.baushLombProtective,
  };

  static getKeysFromSocialMediaDic() {
    return Object.keys(SocialMediaDataMock.socialMediaDic).map((key) => ({'key': key}));
  }

  static setupNextPreviousService(nextPreviousPageService: NextPreviousPageService) {
    nextPreviousPageService.routePrefix = HomeDataMock.socialMediaPath;
    nextPreviousPageService.keyList = SocialMediaDataMock.getKeysFromSocialMediaDic();
  }
}
