import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss'],
  template: `<p>name {{ age | date }}</p>`,
})
export class ViewdetailsComponent implements OnInit {
  age = new Date(1988, 3, 15);

  constructor(
    private data: AuthService,
    private actroute: ActivatedRoute,
    private router: Router
  ) {}
  Id: any;
  item: any;

  ngOnInit(): void {
    this.Id = this.actroute.snapshot.params['id'];
    this.data.getEmp(this.Id).subscribe((data) => {
      this.item = data;
      console.log(this.item);
    });
  }
}
