import { Component, ViewChild  } from '@angular/core';
import { Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import {ReposPage} from '../pages/repos/repos';
import {OrganisationsPage} from '../pages/organisations/organisations';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = UsersPage;
  pages:Array <{title: string, component: any}>;
  menu:any;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, menu: MenuController) {
    //this.initializeApp(platform,statusBar,splashScreen);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.menu = menu;
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organisations', component: OrganisationsPage },
    ];
  }

  initializeApp(platform,statusBar,splashScreen ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
