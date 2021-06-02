import { Component, HostBinding, ViewEncapsulation, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';

@Component({
    selector: 'app-swaps',
    templateUrl: './swaps.component.html',
    styleUrls: ['./swaps.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SwapsComponent implements OnInit {
    @HostBinding('class.swaps') hostClass = true;
    public actualSwapTabIndex = 0;

    constructor(
        private detailsService: DetailsService
    ) {}

    public openTransactionDetails() {
        this.detailsService.show('test', false);
    }

    swapToTab(tabNumber) {
        this.actualSwapTabIndex = tabNumber;
    }

    ngOnInit() {}
}
