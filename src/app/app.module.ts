import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { AdvancePieChartComponent } from './components/advance-pie-chart/advance-pie-chart.component';
import { PieChartGridComponent } from './components/pie-chart-grid/pie-chart-grid.component';
import { SelectorComponent } from './components/selector/selector.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalBarComponent,
    PieChartComponent,
    AdvancePieChartComponent,
    PieChartGridComponent,
    SelectorComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    AngularMultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
