import { Component, OnInit } from "@angular/core";
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: any;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getCategoricalSource();
        console.dir(this.items);
    }
}