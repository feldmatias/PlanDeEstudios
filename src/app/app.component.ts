import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, MenuController, PopoverController, ModalController, ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

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
      icon: 'school'
    },
    {
      title: 'Materias Obligatorias',
      url: '/available-required-subjects',
      icon: 'book'
    },
    {
      title: 'Materias Electivas',
      url: '/available-optional-subjects',
      icon: 'filing'
    },
    {
      title: 'Materias Aprobadas',
      url: '/approved-subjects',
      icon: 'checkbox-outline'
    },
    {
      title: 'Obligatorias Bloqueadas',
      url: '/blocked-subjects',
      icon: 'close-circle-outline'
    },
    {
      title: 'Electivas Bloqueadas',
      url: '/blocked-optional-subjects',
      icon: 'remove-circle-outline'
    }
  ];

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router,
    private navCtrl: NavController,
    private storageService: StorageService,
    private subjectsService: SubjectsService
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(1, async () => {
      // close action sheet
      try {
        let element = await this.actionSheetCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close popover
      try {
        let element = await this.popoverCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close modal
      try {
        let element = await this.modalCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // close side menu
      try {
        if (await this.menu.isOpen()) {
          this.menu.close();
          return;
        }
      } catch (error) {}

      if (this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/home') {
        navigator['app'].exitApp();
      } else {
        this.navCtrl.navigateRoot('/home');
      }
    });
  }
}
