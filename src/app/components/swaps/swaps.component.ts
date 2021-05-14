import { Component, HostBinding, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-swaps',
    templateUrl: './swaps.component.html',
    styleUrls: ['./swaps.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SwapsComponent implements OnInit {

    // options = [{ title: 'INFORMATION' }, { title: 'INITIATE A SWAP' }, { title: 'LIST OF TRANSACTIONS' }];
    // activeOption = this.options[0];

    ngOnInit() {}

    // filterHistory(opt) {
    //     this.activeOption = opt;
    // }
}
