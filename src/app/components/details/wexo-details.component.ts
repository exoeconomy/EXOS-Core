import { Component, ViewEncapsulation, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';
import { TransactionInfo } from '../../classes/transaction-info';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationStateService } from '../../services/application-state.service';

// Until Angular supports improved named routing and lazy-loading, we'll have to use this details controller for all details pain.
@Component({
    selector: 'app-wexodetails',
    templateUrl: './wexo-details.component.html',
    styleUrls: ['./wexo-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WexoDetailsComponent implements OnInit, OnDestroy {
    @HostBinding('class.wexo-details') hostClass = true;

    public copied = false;
    public coinUnit: string;

    constructor(
        public appState: ApplicationStateService,
        private detailsService: DetailsService,
        private apiService: ApiService,
        public snackBar: MatSnackBar,
        private globalService: GlobalService
    ) {

    }

    get transaction(): TransactionInfo {
        return this.detailsService.item;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
