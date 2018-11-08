import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './services/Service.module';
import { SharedModule } from './shared/shared.module';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { effectArreglo } from './store/effects';

// Effects


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectArreglo),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
