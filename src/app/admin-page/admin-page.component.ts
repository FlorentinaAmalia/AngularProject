import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  dataUsers: User[] = [
    {
      
      username: 'Abcd123',
      email: 'ABC@gmail.com',
      password : '678778'
    },
    {
      username: 'Maikki',
      email: 'Maikki@gmail.com',
      password : '7687867'
    },
    {
      username: 'Savannah',
      email: 'Savannah@gmail.com',
      password : '68778'
    },
    {
      username: 'Harley',
      email: 'Harley@gmail.com',
      password : '354543'
    },
    {
      username: 'Kira',
      email: 'Kira@gmail.com',
      password : '123'
    }
  ];
  

  ngOnInit(): void {
    console.log('');
  }

  removeUser(index: number) {
    this.dataUsers.splice(index, 1);
  }
}
