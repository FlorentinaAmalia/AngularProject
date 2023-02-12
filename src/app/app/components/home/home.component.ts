import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  ngOnInit(): void {
    console.log('');
  }

}
