import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css']
})
export class VerticalBarComponent implements OnInit , OnChanges{
  @Input() id! : any;
  regionId1:any;
  regionId2:any;
  data: any;
  view:any = [400];

  // Options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  // Color
  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {}
  
  ngOnChanges(){
    if(this.id === undefined){
    }else{
      this.regionId1 = this.id[0];
      this.regionId2 = this.id[1];
      this.getApiData(this.regionId1 , this.regionId2);
    }
  }
  
  getApiData(id1 : any , id2 : any){
    const temp:any = [];
    this.api.getData().subscribe((data : any) => {
      data.forEach((e : any) => {
        if(id1 == e.id){
          temp.push(e);
        }
      });
    });
    this.api.getData().subscribe((data : any) => {
      data.forEach((e : any) => {
        if(id2 == e.id){
          temp.push(e);
        }
      });
      this.data = temp;
    });
  }
  
  onSelect(event : Event) {
    console.log(event);
  }

}
