import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  course: any;
  courseId: any;
  allCourse: any;
  currentCourse: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private itemService: ItemsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.courseId = this.activateRoute.snapshot.paramMap.get('id');
    this.course = this.itemService.items.find((x) => x.id == this.courseId);
    this.allCourse = this.itemService.items;
    this.currentCourse = this.courseId - 1;
  }
  deleteBtn() {
    if (this.allCourse.splice(this.currentCourse, 1)) {
      this.itemService.fixIds();
    }
    this.router.navigateByUrl('/products');
  }
}
