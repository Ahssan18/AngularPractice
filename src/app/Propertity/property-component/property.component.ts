import { Component, Input } from "@angular/core";

@Component(
  {
    selector:'property-card-compoment',
    templateUrl:'property.Component.html',
    styleUrls:[ 'property.component.scss']
  }
)
export class PropertyCardComponent{
  @Input() property:any;

}
