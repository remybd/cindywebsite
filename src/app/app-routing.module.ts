import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./content/content.component";
import {LayoutHeaderWithoutLogoComponent} from './structure/layouts/header-without-logo/layout-header-without-logo.component';
import {LayoutHeaderWithLogoComponent} from './structure/layouts/header-with-logo/layout-header-with-logo.component';

const routes: Routes = [

  // page with header but no logo
  {
    path: '',
    component: LayoutHeaderWithoutLogoComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '',  redirectTo: '/home', pathMatch: 'full'},
    ]
  },


  // page with header but no logo
  {
    path: '',
    component: LayoutHeaderWithLogoComponent,
    children: [
      { path: 'content/:key', component: ContentComponent },
    ]
  },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
