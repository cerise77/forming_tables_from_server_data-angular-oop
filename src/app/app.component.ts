import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                    <nav [ngClass]="{header:true}">
                      <ul>
                        <li><a routerLink="">Company Sizes</a></li>
                        <li><a routerLink="industries">Industries</a></li>
                        <li><a routerLink="intangibles">Intangibles</a></li>
                        <li><a routerLink="platformtypes">Platform Types</a></li>
                        <li><a routerLink="sports">Sports</a></li>
                        <li><a routerLink="tangiblecategories">Tangible Categories</a></li>
                        <li><a routerLink="tangibleimpacts">Tangible Impacts</a></li>
                        <li><a routerLink="platforms">Platforms</a></li>
                      </ul>
                    </nav>
                    <router-outlet></router-outlet>
               `,
    styleUrls: ['./css/main.component.css']
})
export class AppComponent {}
