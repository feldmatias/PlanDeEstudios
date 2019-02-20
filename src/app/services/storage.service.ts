import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static instance: StorageService;

  constructor(private nativeStorage: NativeStorage) {
    StorageService.instance = this;
  }

  setValue(key: string, value: any){
    this.nativeStorage.setItem(key, value)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item ', error)
      );
  }

  getNumber(key: string, defaultValue: number, callback){
    this.nativeStorage.getItem(key)
      .then(
        data => callback(Number(data)),
        error => callback(defaultValue)
      );
  }
}
