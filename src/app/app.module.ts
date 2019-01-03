import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormNormalComponent } from './components/forms/form-normal/form-normal.component';
import { FormTemplateDrivenComponent } from './components/forms/form-template-driven/form-template-driven.component';
import { FormModelGroupComponent } from './components/forms/form-model-group/form-model-group.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'form-normal', component: FormNormalComponent },
  { path: 'form-template-driven', component: FormTemplateDrivenComponent },
  { path: 'form-model-group', component: FormModelGroupComponent },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppsettingComponent,
    LoginComponent,
    DashboardComponent,
    ChartComponent,
    FormNormalComponent,
    FormTemplateDrivenComponent,
    FormModelGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
