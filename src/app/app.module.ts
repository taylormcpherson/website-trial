import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkIntroComponent } from './work/work-intro/work-intro.component';
import { WorkCardsComponent } from './work/work-cards/work-cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutIntroComponent } from './about/about-intro/about-intro.component';
import { AboutBlurbsComponent } from './about/about-blurbs/about-blurbs.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WorkComponentComponent } from './work/work-component.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { DeviceDetectorModule } from "ngx-device-detector";

@NgModule({
  declarations: [
    AppComponent,
    WorkIntroComponent,
    WorkCardsComponent,
    NavBarComponent,
    AboutIntroComponent,
    AboutBlurbsComponent,
    FooterComponent,
    WorkComponentComponent,
    AboutComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*RouterModule.forRoot([
      {path: 'work', component: WorkComponentComponent},
      {path: 'about', component: AboutComponent},
      {path: 'resume', component: ResumeComponent},
      {path: '', redirectTo: '/work', pathMatch: 'full'},
      {path: '**', redirectTo: '/work', pathMatch: 'full'},
    ]),*/
    BrowserAnimationsModule,
    DeviceDetectorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
