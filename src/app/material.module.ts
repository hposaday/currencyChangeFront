import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
    ]
})
export class MaterialModule { }