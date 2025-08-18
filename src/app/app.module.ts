import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './structure/header/header.component';
import {ButtonMovingDashesComponent} from "./structure/buttons/button-moving-dashes.component";
import {FooterComponent} from './structure/footer/footer.component';
import {ContentComponent} from './content/content.component';
import {BlockImageComponent} from './content/blocks/block-image/block-image.component';
import {BlockSearchComponent} from './content/blocks/block-search/block-search.component';
import {LayoutHomePageComponent} from './structure/layouts/home-page/layout-home-page.component';
import {LayoutLogoComponent} from './structure/layouts/empty/layout-logo.component';
import {HeaderLogoComponent} from './structure/header/header-logo/header-logo.component';
import {HeaderNavComponent} from './structure/header/header-nav/header-nav.component';
import {BlockVideoComponent} from './content/blocks/block-video/block-video.component';
import {BlockLegendComponent} from './content/blocks/block-legend/block-legend.component';
import {ContentBlockCreationComponent} from './content/content-block-creation/content-block-creation.component';
import {CustomHammerConfig} from './hammer-gesture.config';
import {AboutComponent} from './about/about.component';
import {UnlockFormComponent} from './content/unlock-form/unlock-form.component';
import {FormsModule} from "@angular/forms";
import {SocialMediaComponent} from './social-media/social-media.component';
import {NgOptimizedImage} from "@angular/common";
import {FiltersComponent} from "./home/filters/filters.component";
import {FilteredContentListComponent} from "./home/filtered-content-list/filtered-content-list.component";
import {BlockImageCommentComponent} from "./content/blocks/block-image-comment/block-image-comment.component";
import {ContentFooterComponent} from "./content/content-footer/content-footer.component";
import {ScPostContentComponent} from "./social-media/sc-post-content/sc-post-content.component";
import {
  ContentFooterNavigationComponent
} from "./content/content-footer/content-footer-navigation/content-footer-navigation.component";
import {BlockVideoCommentComponent} from "./content/blocks/block-video-comment/block-video-comment.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonMovingDashesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    BlockImageComponent,
    BlockSearchComponent,
    LayoutHomePageComponent,
    LayoutLogoComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    BlockVideoComponent,
    BlockLegendComponent,
    ContentBlockCreationComponent,
    AboutComponent,
    UnlockFormComponent,
    SocialMediaComponent,
    ScPostContentComponent,
    FilteredContentListComponent,
    BlockImageCommentComponent,
    ContentFooterComponent,
    ContentFooterNavigationComponent,
    BlockVideoCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    FormsModule,
    NgOptimizedImage,
    FiltersComponent,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  exports: [
    ButtonMovingDashesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
