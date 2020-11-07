import { Component, OnInit } from '@angular/core';
import TeachersJson from 'src/assets/json/maestros.json';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  Teachers: any = TeachersJson;

  constructor() { 
    console.log('Reading local json files');
    console.log(TeachersJson);
  }

  ngOnInit(): void {
  }

}
