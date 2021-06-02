import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DetailsService {

    static singletonInstance: DetailsService;

    public item: any;
    public exosTransaction = false;
    public wexosTransaction = false;

    constructor() {

        if (!DetailsService.singletonInstance) {
            DetailsService.singletonInstance = this;
        }

        return DetailsService.singletonInstance;

    }

    show(item: any, transactionType) {
        this.item = item;
        if (transactionType) {
            this.exosTransaction = true;
        }else {
            this.wexosTransaction = true;
        }
    }

    hide() {
        this.item = null;
        this.exosTransaction = false;
        this.wexosTransaction = false;
    }

    get opened(): boolean {
        return this.item != null;
    }
}
