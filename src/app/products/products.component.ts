import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from './item.model';

@Component({
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  showImage: boolean = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private itemService: ItemsService) {}

  items = this.itemService.items;
}
