import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  showImage: boolean = false;
  filteredProducts: any;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private itemService: ItemsService) {}

  items = this.itemService.items;
}
