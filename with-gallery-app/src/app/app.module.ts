import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { GalleryComponent } from './gallery/gallery.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MetaDataComponent } from './meta-data/meta-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LoadersCssModule } from 'angular2-loaders-css';
import { ArtComponent } from './art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BreadcrumbsComponent,
    FooterComponent,
    JumbotronComponent,
    MetaDataComponent,
    NavbarComponent,
    ArtComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    BrowserModule,
    InfiniteScrollModule ,
    LoadersCssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
