import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import { AngularFireModule,AuthProviders, AuthMethods  } from 'angularfire2';
// import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add.component';
import { EditListingComponent } from './components/edit-listing/edit.component';
import {FirebaseService} from './components/services/firebase.service';
import { ListingComponent } from './components/listing/listing.component'

export const firebaseConfig = {
    apiKey: "AIzaSyA8Zh0kvSzN_RSQRsg_Dp_WlfHBhccHN10",
    authDomain: "angular2firebase-a1b43.firebaseapp.com",
    databaseURL: "https://angular2firebase-a1b43.firebaseio.com",
    projectId: "angular2firebase-a1b43",
    storageBucket: "angular2firebase-a1b43.appspot.com",
    messagingSenderId: "577996812338"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {  path:'listings',component:ListingsComponent},
  {  path:'listing/:id',component:ListingComponent},
  {path:'add-listings', component:AddListingComponent},
  {path:'edit-listings/:id', component:EditListingComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    AddListingComponent,
    EditListingComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
