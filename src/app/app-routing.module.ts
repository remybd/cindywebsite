import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./content/content.component";
import {LayoutLogoComponent} from './structure/layouts/empty/layout-logo.component';
import {LayoutHomePageComponent} from './structure/layouts/home-page/layout-home-page.component';
import {AboutComponent} from './about/about.component';
import {environment} from "../environments/environment";
import {CategoryComponent} from "./home/category/category.component";
import {SocialMediaComponent} from "./social-media/social-media.component";

const routes: Routes = [

  // page with header and logo
  {
    path: '',
    component: LayoutLogoComponent,
    children: [
      {
        path: 'category',
        component: HomeComponent,
        children: [
          { path: 'Social Media', component: SocialMediaComponent },
          { path: ':category', component: CategoryComponent }
        ]
      },
      { path: 'home', component: HomeComponent, title: environment.titleBase + 'Home',
        children: [
          { path: '', component: CategoryComponent }
        ]},
      { path: '',  redirectTo: '/home', pathMatch: 'full'},
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


  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
