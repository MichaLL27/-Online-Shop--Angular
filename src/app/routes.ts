import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { EditComponent } from './edit/edit.component';

export const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit', component: EditComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
