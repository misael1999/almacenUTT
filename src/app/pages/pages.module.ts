
import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './dashboard/pages-routing.module';
import { HttpClientModule } from '@angular/common/http';


// Pipe Module




@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        HttpClientModule,

    ]
})
export class PagesModule { }


