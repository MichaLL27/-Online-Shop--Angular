import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  course: any;
  courseId: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private itemService: ItemsService
  ) {}

  ngOnInit(): void {
    this.courseId = this.activateRoute.snapshot.paramMap.get('id');
    this.course = this.itemService.items.find((x) => x.id == this.courseId);
  }
}
