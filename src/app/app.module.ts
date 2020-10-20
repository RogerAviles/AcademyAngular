import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './secondary/index/index.component';
import { NosotrosComponent } from './secondary/nosotros/nosotros.component';
import { PricingComponent } from './secondary/pricing/pricing.component';

const rutas: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'precios', component: PricingComponent}
 ];
 
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    FooterComponent,
    IndexComponent,
    NosotrosComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
