import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [

{path: '', component: Homepage1Component},
{path: 'homepage2', component: Homepage2Component},
{path: 'finance', component: FinanceComponent},
{path: 'blog', component: BlogComponent},
{path: 'blog-left-sidebar', component: BlogLeftSidebarComponent},
{path: 'blog-detail', component: BlogDetailComponent},
{path: '404', component: Error404Component},
{path: 'coming-soon', component: ComingSoonComponent},
{path: 'our-team', component: OurTeamComponent},
{path: 'loan-calculator', component: LoanCalculatorComponent},
{path: 'about-us', component: AboutUsComponent},
{path: 'contactus', component: ContactusComponent},
{path: 'service', component: ServiceComponent},
{path: 'service-detail', component: ServiceDetailComponent},
{path: 'loan-dashboard', component: UserDashboardComponent},
{path: 'loan-steps', component: LoanStepsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
