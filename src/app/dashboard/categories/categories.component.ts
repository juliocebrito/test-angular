import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data: any;
  loading = true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getCategories().subscribe(({data, loading}) => {
      this.data = data;
      this.loading = loading;
    });
  }

}
