import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { HeaderComponent } from './email-template/header/header.component';
import { FooterComponent } from './email-template/footer/footer.component';
import { CertificateComponent } from './email-template/certificate/certificate.component';
import { DigitalAreaComponent } from './email-template/digital-area/digital-area.component';
import { UserComponent } from './email-template/user/user.component';
import { ProgramDetailsComponent } from './email-template/program-details/program-details.component';
import { MainBannerComponent } from './email-template/main-banner/main-banner.component';
import { LeftColumnComponent } from './landing-page/left-column/left-column.component';
import { RightColumnComponent } from './landing-page/right-column/right-column.component';
import { BottomAreaComponent } from './landing-page/bottom-area/bottom-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EmailTemplateComponent,
    HeaderComponent,
    FooterComponent,
    CertificateComponent,
    DigitalAreaComponent,
    UserComponent,
    ProgramDetailsComponent,
    MainBannerComponent,
    LeftColumnComponent,
    RightColumnComponent,
    BottomAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
