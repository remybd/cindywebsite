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
import { LayoutHeaderWithLogoComponent } from './structure/layouts/header-with-logo/layout-header-with-logo.component';
import { LayoutHeaderWithoutLogoComponent } from './structure/layouts/header-without-logo/layout-header-without-logo.component';
import { HeaderLogoComponent } from './structure/header/header-logo/header-logo.component';
import { HeaderNavComponent } from './structure/header/header-nav/header-nav.component';

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
    LayoutHeaderWithLogoComponent,
    LayoutHeaderWithoutLogoComponent,
    HeaderLogoComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
