import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';

import { CompanySize }   from './companySize.component';
import { Industries }   from './industries.component';
import { Intangibles }   from './intangibles.component';
import { PlatformTypes }   from './platformTypes.component';
import { Sports }   from './sports.component';
import { TangibleCategories }   from './tangibleCategories.component';
import { TangibleImpacts }   from './tangibleImpacts.component';
import { Platforms }   from './platforms.component';
import { NotFoundComponent }   from './not-found.component';

import { HttpService }   from './http.service';

const appRoutes: Routes =[
  { path: '', component: CompanySize},
  { path: 'industries', component: Industries},
  { path: 'intangibles', component: Intangibles},
  { path: 'platformtypes', component: PlatformTypes},
  { path: 'sports', component: Sports},
  { path: 'tangiblecategories', component: TangibleCategories},
  { path: 'tangibleimpacts', component: TangibleImpacts},
  { path: 'platforms', component: Platforms},
  { path: '**', component: NotFoundComponent }
];

//

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [
                    AppComponent, NotFoundComponent,
                    CompanySize, Industries, Intangibles, PlatformTypes, Sports, TangibleCategories, TangibleImpacts, Platforms
                  ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
