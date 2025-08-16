import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./content/content.component";
import {LayoutLogoComponent} from './structure/layouts/empty/layout-logo.component';
import {LayoutHomePageComponent} from './structure/layouts/home-page/layout-home-page.component';
import {AboutComponent} from './about/about.component';
import {environment} from "../environments/environment";
import {SocialMediaComponent} from "./social-media/social-media.component";
import {ScPostComponent} from "./social-media/sc-post/sc-post.component";
import {FilteredContentListComponent} from "./home/filtered-content-list/filtered-content-list.component";

const routes: Routes = [

  // page with header and logo
  {
    path: '',
    component: LayoutLogoComponent,
    children: [
      {
        path: 'social-media', component: HomeComponent, title: environment.titleBase + 'Social Media',
        children: [
          {path: 'content', component: SocialMediaComponent,
            children: [
              {path: ':key', component: ScPostComponent},
            ]
          },
          {path: '', component: SocialMediaComponent}
        ]
      },
      {
        path: 'home', component: HomeComponent, title: environment.titleBase + 'Home',
        children: [
          {path: ':category', component: FilteredContentListComponent},
          {path: '', component: FilteredContentListComponent}
        ]
      },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
  },

  {
    path: 'about', component: AboutComponent, title: environment.titleBase + 'About'
  },

  // page with header but no logo
  {
    path: '',
    component: LayoutHomePageComponent,
    children: [
      {
        path: 'content/:key', component: ContentComponent
      },
    ]
  },


  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
