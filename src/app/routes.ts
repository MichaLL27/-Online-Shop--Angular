import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { EditComponent } from './edit/edit.component';
import { NewProduct } from './newProduct/new.product';
import { DeleteComponent } from './delete/delete.component';

export const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit/:id', component: EditComponent },
  { path: 'products/new', component: NewProduct },
  { path: 'products/delete/:id', component: DeleteComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
