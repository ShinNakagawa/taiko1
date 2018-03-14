import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EventPage } from '../pages/contact/event/event';
import { StoragePage } from '../pages/storage/storage';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {  
  apiKey: "AIzaSyCEo24FMxTyU8IemGPVY8-XRXuO_ZkZVn4",
  authDomain: "base-gallery.firebaseapp.com",
  databaseURL: "https://base-gallery.firebaseio.com",
  projectId: "base-gallery",
  storageBucket: "base-gallery.appspot.com",
  messagingSenderId: "103599334911"
};
import { AuthProvider } from '../providers/auth/auth';
//youtube
import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider } from '../providers/yt/yt';
//pipes
import { MomentPipe } from '../pipes/moment/moment';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StoragePage,
    MomentPipe,
    EventPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StoragePage,
    TabsPage,
    EventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeVideoPlayer,
    AuthProvider,
    YtProvider
  ],
  exports: [
    MomentPipe
  ]
})
export class AppModule {}
