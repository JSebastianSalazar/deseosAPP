import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//services
import {ListaDeseosServices} from '../services/lista-deseos.services';

//pipe
import {PipesPlaceholder} from '../pipe/pipes-placeholder';

import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TabsPage } from '../pages/tabs/tabs';
import {AgregarComponet} from '../pages/agregar/agregar.componet'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    PipesPlaceholder,
    MyApp,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
    AgregarComponet
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TerminadosComponent,
    PendientesComponent,
    TabsPage,
    AgregarComponet
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
