import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  a_2005 = new Date(2005, 8, 20);
  a_2007 = new Date(2007, 5, 20);
  a_2009 = new Date(2009, 11, 20);
  a_2011 = new Date(2011, 12, 20);
  a_2020 = new Date(2020, 4, 5);
  constructor() { }

  ngOnInit(): void {
  }

}
