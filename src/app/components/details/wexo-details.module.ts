import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { WexoDetailsComponent } from './wexo-details.component';
import { AppSharedModule } from '../../shared/app-shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppSharedModule,
        MaterialModule,
    ],
    declarations: [
        WexoDetailsComponent,
    ],
    exports: [
        WexoDetailsComponent,
    ],
})
export class WexoDetailsModule {
}
