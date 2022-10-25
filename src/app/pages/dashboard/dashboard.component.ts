import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'itsData';
  id:any;
  showData=false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(e :any){
    this.id = e;
    this.showData = true;
  }

}
