import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any>=[
    {
      "id":1,
      "name":"Ahssan house",
      "type":"3 marla house",
      "price":12000

  },
  {
    "id":1,
    "name":"Usman house",
    "type":"4 marla house",
    "price":15000

},{
  "id":1,
  "name":"CH house",
  "type":"5 marla house",
  "price":18000

},{
  "id":1,
  "name":"Ahssan house",
  "type":"3 marla house",
  "price":12000

},
{
"id":1,
"name":"Usman house",
"type":"4 marla house",
"price":15000

},{
"id":1,
"name":"CH house",
"type":"5 marla house",
"price":18000

},{
  "id":1,
  "name":"Ahssan house",
  "type":"3 marla house",
  "price":12000

},
{
"id":1,
"name":"Usman house",
"type":"4 marla house",
"price":15000

},{
"id":1,
"name":"CH house",
"type":"5 marla house",
"price":18000

}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
