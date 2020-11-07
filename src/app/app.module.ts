import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalTimelineModule } from 'angular-vertical-timeline';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './secondary/index/index.component';
import { NosotrosComponent } from './secondary/nosotros/nosotros.component';
import { PricingComponent } from './secondary/pricing/pricing.component';
import { AboutComponent } from './secondary/about/about.component';
import { LoginComponent } from './shared/login/login.component';
import { TeacherComponent } from './secondary/teacher/teacher.component';


//https://fontawesome.bootstrapcheatsheets.com/
//https://www.lwtech.edu/_resources/fonts/flat-icons/fonts-simpleicon/flaticon.html

const rutas: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'precios', component: PricingComponent},
  { path: 'teacher', component: TeacherComponent}
 ];
 
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    FooterComponent,
    IndexComponent,
    NosotrosComponent,
    PricingComponent,
    AboutComponent,
    LoginComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    // Specify the timeline as an import
    VerticalTimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
