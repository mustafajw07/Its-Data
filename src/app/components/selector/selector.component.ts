import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  
  disable = true;
  regionOne:any = [];
  regionTwo:any = [];
  regionOneItems:any = [];
  regionTwoItems:any = [];
  dropdownSettings:any = {};

  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.regionOne = [
      { id: 1, itemName: 'Germany' },
      { id: 2, itemName: 'USA' },
      { id: 3, itemName: 'France' },
      { id: 4, itemName: 'UK' },
    ];
    this.regionTwo = [
      { id: 1, itemName: 'Germany' },
      { id: 2, itemName: 'USA' },
      { id: 3, itemName: 'France' },
      { id: 4, itemName: 'UK' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      enableSearchFilter: true,
      enableFilterSelectAll:false,
      enableCheckAll:false,
      limitSelection:1,
      classes: 'myclass custom-class-example',
    };
  }

  check(){
    if(this.regionOneItems.length !== 0 && this.regionTwoItems.length !== 0){
      this.disable = false;
    }else{
      this.disable = true;
    }
  }
  submit(){
    this.newItemEvent.emit([this.regionOneItems[0].id , this.regionTwoItems[0].id]);
  }
}
