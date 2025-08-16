import {ContentPageModel} from "../content/models/content-page.model";
import {ContentSocialMediaModel} from "../content/models/content-social-media.model";

export class SocialMediaDataMock {
  public static contentSocialMediaPath = '/category/Social Media/';

  static caringSgMusic: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    [],
    '/assets/img/social-media/caring-sg/music.gif',
    'music'
  );
  static caringSgTree: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    [],
    '/assets/img/social-media/caring-sg/tree.gif',
    'tree'
  );
  static caringSgWalk: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    [],
    '/assets/img/social-media/caring-sg/walk.gif',
    'walk'
  );

  static baushLombHydrating: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    [],
    '/assets/img/social-media/baush-lomb/hydrating.png',
    'hydrating'
  );
  static baushLombLightweight: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
    [],
    '/assets/img/social-media/baush-lomb/lightweight.png',
    'lightweight'
  );
  static baushLombProtective: ContentSocialMediaModel = new ContentSocialMediaModel(
    'Caisse d\'épargne - official supporter of the French Handball team',
    'Poster design for the men\'s and women\'s handball world cup',
    'Agency: Altmann + Pacreau / Copywriter : Jeanne Teissier / Jersey Photograph : David Meignan / Woman Photograph : Etienne Garnier',
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
