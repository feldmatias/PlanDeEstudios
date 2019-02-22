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

  async setValue(key: string, value: any){
    try{
      this.nativeStorage.setItem(key, value)
    } catch {}
  }

  async getNumber(key: string, defaultValue: number){
    return Number(await this.getValue(key, defaultValue));
  }

  async getString(key: string, defaultValue: string){
    return await this.getValue(key, defaultValue);
  }

  private async getValue(key: string, defaultValue: any){
    try {
      return await this.nativeStorage.getItem(key);
    } catch {
      return defaultValue;
    }
  }
}
