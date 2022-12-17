import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private router: Router) {}

  @Output() newItem: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  onNewItem() {}

  calncel() {
    this.router.navigateByUrl('/products');
  }
}
