import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

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
      classes: 'myclass custom-class',
      enableCheckAll:false,
      lazyLoading:true,
    };
  }
  submit(){
    this.newItemEvent.emit([this.regionOneItems[0].id , this.regionTwoItems[0].id]);
  }
}
