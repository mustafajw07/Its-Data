import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pie-chart-grid',
  templateUrl: './pie-chart-grid.component.html',
  styleUrls: ['./pie-chart-grid.component.css']
})
export class PieChartGridComponent implements OnInit {

  data:any;
  view: any = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(){
    this.api.getData().subscribe((data) => {
      this.data = data;
    })
  }

  onSelect(event : Event) {
    console.log(event);
  }

}
