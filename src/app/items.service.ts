import { Injectable } from '@angular/core';
import { Item } from './products/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  items: Item[] = [
    {
      id: 1,
      name: 'HL Road Frame - black, 58',
      number: 'FR-R92B-58',
      color: 'black',
      price: 900.0,
      date: '11 November 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 2,
      name: 'HL Road Frame - Red, 58',
      number: 'FR-R92B-58',
      color: 'Red',
      price: 1.431,
      date: '06 August 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 3,
      name: 'HL Road Frame - Red, 62',
      number: 'FR-R92B-62',
      color: 'Red',
      price: 1.431,
      date: '09 November 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 4,
      name: 'HL Road Frame - Red, 44',
      number: 'FR-R92B-44',
      color: 'Red',
      price: 1.431,
      date: '18 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 5,
      name: 'HL Road Frame - Red, 48',
      number: 'FR-R92B-48',
      color: 'Red',
      price: 1.431,
      date: '13 February 2022',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 6,
      name: 'HL Road Frame - Red, 52',
      number: 'FR-R92B-52',
      color: 'Red',
      price: 1.431,
      date: '28 February 2022',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 7,
      name: 'HL Road Frame - Red, 56',
      number: 'FR-R92B-56',
      color: 'Red',
      price: 1.431,
      date: '28 February 2022',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 8,
      name: 'HL Road Frame - Black, 58',
      number: 'FR-R38B-58',
      color: 'Black',
      price: 337.22,
      date: '12 January 2022',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 9,
      name: 'HL Road Frame - Black, 60',
      number: 'FR-R38B-60',
      color: 'Black',
      price: 337.22,
      date: '02 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 10,
      name: 'HL Road Frame - Black, 62',
      number: 'FR-R38B-62',
      color: 'Black',
      price: 337.22,
      date: '01 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 11,
      name: 'HL Road Frame - Black, 62',
      number: 'FR-R38B-62',
      color: 'Black',
      price: 337.22,
      date: '01 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 12,
      name: 'HL Road Frame - Black, 62',
      number: 'FR-R38B-62',
      color: 'Black',
      price: 337.22,
      date: '01 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 13,
      name: 'Mountain - Black, 62',
      number: 'FR-R38B-62',
      color: 'Black',
      price: 337.22,
      date: '01 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
    {
      id: 14,
      name: 'Mountain - red, 62',
      number: 'FR-R38B-62',
      color: 'red',
      price: 337.22,
      date: '01 December 2021',
      actions: 'nothing yet',
      cost: 1500,
      size: 15,
      weight: 1016,
    },
  ];

  fixIds() {
    this.items.map((x, i) => (x.id = i + 1));
  }
}
