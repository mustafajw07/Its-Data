import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit ,OnChanges {
  @Input() id! : any;
  regionId1:any;
  regionId2:any;
  data:any;

  view: any= [500];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition:any = 'below';

  colorScheme:any = {
    domain: ['#0e4653', '#d2a438'],
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

  getApiData(id1:any , id2 :any){
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

  onSelect(data : any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data : any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
