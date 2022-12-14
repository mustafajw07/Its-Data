import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { AdvancePieChartComponent } from './components/advance-pie-chart/advance-pie-chart.component';
import { PieChartGridComponent } from './components/pie-chart-grid/pie-chart-grid.component';
import { SelectorComponent } from './components/selector/selector.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalBarComponent,
    PieChartComponent,
    AdvancePieChartComponent,
    PieChartGridComponent,
    SelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
