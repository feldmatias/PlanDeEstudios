import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SubjectsService } from './services/subjects.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Carrera',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Materias Obligatorias',
      url: '/available-required-subjects',
      icon: 'home'
    },
    {
      title: 'Materias Electivas',
      url: '/available-optional-subjects',
      icon: 'home'
    },
    {
      title: 'Materias Aprobadas',
      url: '/approved-subjects',
      icon: 'home'
    },
    {
      title: 'Obligatorias Bloqueadas',
      url: '/blocked-subjects',
      icon: 'home'
    },
    {
      title: 'Electivas Bloqueadas',
      url: '/blocked-optional-subjects',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    private subjectsService: SubjectsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
      this.platform.backButton.subscribe(()=>console.log('hola'));
    });
  }
}
