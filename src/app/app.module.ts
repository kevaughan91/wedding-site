import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location.component'
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RegistryComponent } from './registry/registry.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'bridalparty', component: BridalPartyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    RegistryComponent,
    BridalPartyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
