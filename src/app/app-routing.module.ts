import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./content/content.component";
import {LayoutEmptyComponent} from './structure/layouts/empty/layout-empty.component';
import {LayoutHomePageComponent} from './structure/layouts/home-page/layout-home-page.component';

const routes: Routes = [

  // page with header but no logo
  {
    path: '',
    component: LayoutEmptyComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '',  redirectTo: '/home', pathMatch: 'full'},
    ]
  },


  // page with header but no logo
  {
    path: '',
    component: LayoutHomePageComponent,
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
