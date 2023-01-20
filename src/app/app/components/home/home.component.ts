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
    console.log('')
  }
  dataUsers: User[] = [
    {
      
      username: 'Abcd123',
      email: 'ABC@gmail.com',
      password : 'password'
    },
    {
      username: 'Maikki',
      email: 'Maikki@gmail.com',
      password : 'fjfjeheufig55'
    },
    {
      username: 'Savannah',
      email: 'Savannah@gmail.com',
      password : '66g4g45r5r'
    },
    {
      username: 'Harley',
      email: 'Harley@gmail.com',
      password : 'Harley222255'
    },
    {
      username: 'Kira',
      email: 'Kira@gmail.com',
      password : 'KiraKira'
    }
  ]

  
  @Input() alldatausers: any = [];

}
