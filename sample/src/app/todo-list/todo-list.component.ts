import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  items=['やること1', 'やること2', 'やること3']

  ngOnInit(): void {
  }

}
