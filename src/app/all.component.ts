import { Component } from '@angular/core';

@Component({
  selector: 'all-component',
  template: `
    <div class="all">
      <div class="all__container">
        <navbar></navbar>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./all.component.scss'],
})
export class AllComponent {}
