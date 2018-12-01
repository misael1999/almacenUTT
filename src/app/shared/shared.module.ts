import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Pipes

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ErrorComponent } from './mensaje/error/error.component';
import { SuccessComponent } from './mensaje/success/success.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        ErrorComponent,
        SuccessComponent,
        PaginatorComponent,
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        ErrorComponent,
        SuccessComponent,
        PaginatorComponent,

    ]
})
export class SharedModule { }
