import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { SwapsComponent } from './swaps.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    declarations: [
        SwapsComponent,
    ],
    exports: [
        SwapsComponent,
    ],
})
export class SwapsModule {
}
