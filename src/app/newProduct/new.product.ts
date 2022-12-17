import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../products/item.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'new.product.html',
  styleUrls: ['./new.product.scss'],
})
export class NewProduct implements OnInit {
  constructor(private router: Router) {}

  @Output() newItem: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log('FIRST');
  }

  onNewItem() {
    console.log('click');
  }

  calncel() {
    this.router.navigateByUrl('/products');
  }
}
