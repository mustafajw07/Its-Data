import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css']
})
export class VerticalBarComponent implements OnInit {

  data?: any[];
  view:any = [700, 400];

  // Options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  // // Color
  // colorScheme:any = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  // };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getApiData();
  }
  
  getApiData(){
    this.api.getData().subscribe((data : any) => {
      this.data = data;
    })
  }
  
  onSelect(event : Event) {
    console.log(event);
  }

}
