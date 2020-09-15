import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./content/content.component";
import {LayoutLogoComponent} from './structure/layouts/empty/layout-logo.component';
import {LayoutHomePageComponent} from './structure/layouts/home-page/layout-home-page.component';
import {AProposComponent} from './a-propos/a-propos.component';

const routes: Routes = [

  // page with header and logo
  {
    path: '',
    component: LayoutLogoComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '',  redirectTo: '/home', pathMatch: 'full'},
    ]
  },

  {
    path: 'a-propos', component: AProposComponent,
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
