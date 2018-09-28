import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { KaiTableDataSource } from './kai-table-datasource';

@Component({
  selector: 'app-kai-table',
  templateUrl: './kai-table.component.html',
  styleUrls: ['./kai-table.component.css']
})
export class KaiTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: KaiTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new KaiTableDataSource(this.paginator, this.sort);
  }
}
