import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from '../items.service';

@Component({
  templateUrl: 'new.product.html',
  styleUrls: ['./new.product.scss'],
})
export class NewProduct implements OnInit {

  newProduct = new FormGroup({
    name: new FormControl(''),
    productNumber: new FormControl(''),
    color: new FormControl(''),
    standartCost: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    weight: new FormControl(''),
    date: new FormControl(''),
  });

  constructor(private router: Router, private items: ItemsService) {}

  ngOnInit() {}

  onNewItem() {
    const createItem = [
      {
        id: 21,
        name: this.newProduct.controls.name.value,
        number: this.newProduct.controls.productNumber.value,
        color: this.newProduct.controls.color.value,
        price: +this.newProduct.controls.price.value,
        date: this.newProduct.controls.date.value,
        actions: 'add',
        cost: +this.newProduct.controls.standartCost.value,
        size: +this.newProduct.controls.size.value,
        weight: +this.newProduct.controls.weight.value,
      },
    ];

    createItem.map((x) => {
      return this.items.items.unshift(x)
    });
    this.items.fixIds();
    this.router.navigate(['/products']);
  }

  calncel() {
    this.router.navigate(['/products']);
  }
}
