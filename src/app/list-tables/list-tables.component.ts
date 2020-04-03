import { Component, OnInit } from '@angular/core';
import { Tables } from '../model/Tables';
import { TablesService } from '../Services/tables.service';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {
  listTables : Tables[] = []
  
  constructor(private tablesService : TablesService) { }

  ngOnInit(): void {
    this.tablesService.getAll().subscribe(
      data => {
        this.listTables=data;
      }
    ) 
  }
  deleteTables(idTables : number) {
    this.tablesService.deleteTables(idTables).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/tables'
      }
    )
  }

}
