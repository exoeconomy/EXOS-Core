import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LocaleService {

    // Chosse Locale From This Link
    // https://github.com/angular/angular/tree/master/packages/common/locales
    constructor() { }

    private localization: string;



    set locale(value: string) {
        this.localization = value;
        this.setCurrentLocale(value);
    }

    get locale(): string {
        return this.getCurrentLocale() || 'en';
    }

    private getCurrentLocale(): string {
        return localStorage.getItem('Settings:Locale');
    }

    private setCurrentLocale(locale: string) {
        localStorage.setItem('Settings:Locale', locale);
    }

    public registerCulture(culture: string) {
        if (!culture) {
            return;
        }

        this.setCurrentLocale(culture);

        switch (culture) {

            case 'es': {
                this.localization = 'es';
                console.log('Application Culture Set to Español');
                break;
            }
            case 'en': {
                this.localization = 'en';
                console.log('Application Culture Set to English');
                break;
            }
            case 'fr': {
                this.localization = 'fr';
                console.log('Application Culture Set to French');
                break;
            }
            case 'it': {
                this.localization = 'it';
                console.log('Application Culture Set to Italian');
                break;
            }
            default: {
                this.localization = 'en';
                console.log('Application Culture Set to English');
                break;
            }
        }
    }
}
