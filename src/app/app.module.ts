import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { Homepage1Component } from './components/pages/homepage1/homepage1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { FinanceComponent } from './components/pages/finance/finance.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogLeftSidebarComponent } from './components/pages/blog-left-sidebar/blog-left-sidebar.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { LoanCalculatorComponent } from './components/pages/loan-calculator/loan-calculator.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { UserDashboardComponent } from './components/pages/user-dashboard/user-dashboard.component';
import { LoanStepsComponent } from './components/pages/loan-steps/loan-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Homepage1Component,
    Homepage2Component,
    FinanceComponent,
    BlogComponent,
    BlogLeftSidebarComponent,
    BlogDetailComponent,
    Error404Component,
    ComingSoonComponent,
    OurTeamComponent,
    LoanCalculatorComponent,
    AboutUsComponent,
    ContactusComponent,
    ServiceComponent,
    ServiceDetailComponent,
    UserDashboardComponent,
    LoanStepsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
      Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
