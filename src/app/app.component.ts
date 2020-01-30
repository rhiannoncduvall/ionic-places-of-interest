import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Text to Speech',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'cog'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'cog'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // const isDesktop  = this.platform.is('desktop')
      // console.log("desktop: ", isDesktop)
      this.statusBar.styleDefault();
      this.splashScreen.hide()
    });
  }
}