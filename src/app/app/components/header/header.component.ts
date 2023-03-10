import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {
    console.log('')
  }

  constructor(private auth: AuthService, private router: Router) {}
  
  logout(): void {
    this.auth.logout();
  }
}
