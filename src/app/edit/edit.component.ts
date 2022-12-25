import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteComponent } from '../delete/delete.component';
import { ItemsService } from '../items.service';

@Component({
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  newProduct: FormGroup;

  course: any;
  courseId: any;
  allCourse: any;
  currentCourse: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private itemService: ItemsService,
    private deleteComponent: DeleteComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseId = this.activateRoute.snapshot.paramMap.get('id');
    this.course = this.itemService.items.find((x) => x.id == this.courseId);
    this.allCourse = this.itemService.items;
    this.currentCourse = this.courseId - 1;

    let name = new FormControl(this.course?.name);
    let productNumber = new FormControl(this.course?.number);
    let color = new FormControl(this.course?.color);
    let cost = new FormControl(this.course?.cost);
    let price = new FormControl(this.course?.price);
    let size = new FormControl(this.course?.size);
    let weight = new FormControl(this.course?.weight);
    let date = new FormControl(this.course?.date);
    this.newProduct = new FormGroup({
      name: name,
      productNumber: productNumber,
      color: color,
      cost: cost,
      price: price,
      size: size,
      weight: weight,
      date: date,
    });
  }

  update(value: any): void {
    this.course.name = value.name;
    this.course.number = value.productNumber;
    this.course.color = value.color;
    this.course.cost = value.cost;
    this.course.price = value.price;
    this.course.size = value.size;
    this.course.weight = value.weight;
    this.course.date = value.date;
    this.router.navigate(['/products']);
  }
  delete(): void {
    // this.deleteComponent.deleteBtn();

    if (this.allCourse.splice(this.currentCourse, 1)) {
      this.itemService.fixIds();
    }
    this.router.navigate(['/products']);
  }
}
