import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    console.log('')
    if(this.auth.isLoggedIn() == true){
          this.router.navigate(['home'])}

  }
  
loginForm= new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new  FormControl('', [Validators.required]),
});

onSubmit(): void {
  if (this.loginForm.valid) {
    this.auth.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['home']);
      },
      (err: Error) => {
        alert(err.message);
      }
    );
  }
}
}
