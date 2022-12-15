import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  course: any;
  courseId: any;
  constructor(
    private activateRoute: ActivatedRoute
  ) // private productComponent: ProductsComponent
  {}

  ngOnInit(): void {
    // this.courseId = this.activateRoute.snapshot.paramMap.get('id');
    this.courseId = this.activateRoute.snapshot.params['id'];
    // this.course = this.productComponent.items.find(
    //   (x) => x.id == this.courseId
    // );
  }
}
