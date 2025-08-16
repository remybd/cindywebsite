import {ContentPageModel} from "../content/models/content-page.model";
import {ContentSocialMediaModel} from "../content/models/content-social-media.model";
import {ContentImageCommentModel} from "../content/models/content-image-comment.model";

export class SocialMediaDataMock {
  public static contentSocialMediaPath = '/category/Social Media/';

  static caringSgMusic: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caring SG Commuters - Tuning into acts of care',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel('/assets/img/social-media/caring-sg/music.gif', '/assets/img/social-media/caring-sg/music_comments.png')],
    '/assets/img/social-media/caring-sg/music.gif',
    'music'
  );
  static caringSgTree: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caring SG Commuters - Celebrate the Festive season',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel('/assets/img/social-media/caring-sg/tree.gif', '/assets/img/social-media/caring-sg/tree_comments.png')],
    '/assets/img/social-media/caring-sg/tree.gif',
    'tree'
  );
  static caringSgWalk: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caring SG Commuters -  Give a hand and make a difference',
    '',
    'Agency: Adred Creative',
    [new ContentImageCommentModel('/assets/img/social-media/caring-sg/walk.gif', '/assets/img/social-media/caring-sg/walk_comments.png')],
    '/assets/img/social-media/caring-sg/walk.gif',
    'walk'
  );

  static baushLombHydrating: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    '',
    'Agency: Adred Creative',
    [],
    '/assets/img/social-media/baush-lomb/hydrating.png',
    'hydrating'
  );
  static baushLombLightweight: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    '',
    'Agency: Adred Creative',
    [],
    '/assets/img/social-media/baush-lomb/lightweight.png',
    'lightweight'
  );
  static baushLombProtective: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    '',
    'Agency: Adred Creative',
    [],
    '/assets/img/social-media/baush-lomb/protective.png',
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
}
