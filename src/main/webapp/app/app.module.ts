import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterApplicationUneSharedModule, UserRouteAccessService } from './shared';
import { JhipsterApplicationUneAppRoutingModule} from './app-routing.module';
import { JhipsterApplicationUneHomeModule } from './home/home.module';
import { JhipsterApplicationUneAdminModule } from './admin/admin.module';
import { JhipsterApplicationUneAccountModule } from './account/account.module';
import { JhipsterApplicationUneEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterApplicationUneAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterApplicationUneSharedModule,
        JhipsterApplicationUneHomeModule,
        JhipsterApplicationUneAdminModule,
        JhipsterApplicationUneAccountModule,
        JhipsterApplicationUneEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterApplicationUneAppModule {}
