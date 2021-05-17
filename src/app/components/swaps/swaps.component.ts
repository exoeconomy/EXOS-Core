import { Component, HostBinding, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-swaps',
    templateUrl: './swaps.component.html',
    styleUrls: ['./swaps.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SwapsComponent implements OnInit {
    @HostBinding('class.swaps') hostClass = true;

    ngOnInit() {}
}
