import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './structure/header/header.component';
import {ButtonMovingDashesComponent} from "./structure/buttons/button-moving-dashes.component";
import { FooterComponent } from './structure/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BlockImageComponent } from './content/blocks/block-image/block-image.component';
import { BlockSearchComponent } from './content/blocks/block-search/block-search.component';
import { LayoutHomePageComponent } from './structure/layouts/home-page/layout-home-page.component';
import { LayoutLogoComponent } from './structure/layouts/empty/layout-logo.component';
import { HeaderLogoComponent } from './structure/header/header-logo/header-logo.component';
import { HeaderNavComponent } from './structure/header/header-nav/header-nav.component';
import { BlockVideoComponent } from './content/blocks/block-video/block-video.component';
import { BlockLegendComponent } from './content/blocks/block-legend/block-legend.component';
import { ContentBlockCreationComponent } from './content/content-block-creation/content-block-creation.component';

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
    ContentBlockCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
