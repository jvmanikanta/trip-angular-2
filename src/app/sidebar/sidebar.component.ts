import { Component, Input, OnInit } from '@angular/core';
import { Priority } from '../model/priority.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() onClick: (priority:string) => any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
