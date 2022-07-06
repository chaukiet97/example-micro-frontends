import { Injectable } from '@angular/core';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export enum Environment {
  sendo = 'https://mapi.sendo.vn/',
  tiki = 'https://tiki.vn',
  lazada = 'lazada',
  shoppe = 'https://shopee.vn',
}
export class EnvService {
  private _env!: Environment;
  // tslint:disable-next-line:variable-name
  private _apiUrl!: string;
  private _redirectUrl!: string;
  constructor() { }
  init(): Promise<void> {
    return new Promise(resolve => {
      this.setEnvVariables();
      resolve();
    });
  }

  get env(): Environment {
    return this._env;
  }
  private setEnvVariables(): void {
    const hostname = localStorage.getItem("ENV");
    if (hostname === "SENDO") {
      this._env = Environment.sendo;
      this._redirectUrl = Environment.sendo;
      this._apiUrl = Environment.sendo;
    } else if (hostname === "TIKI") {
      this._env = Environment.tiki;
      this._redirectUrl = Environment.tiki;
      this._apiUrl = Environment.tiki;
    }
    else if (hostname === "SHOPPE") {
      this._env = Environment.shoppe;
      this._apiUrl = Environment.shoppe;
      this._redirectUrl = Environment.shoppe;
    }
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  get redirectUrl(): string {
    return this._redirectUrl;
  }

}
