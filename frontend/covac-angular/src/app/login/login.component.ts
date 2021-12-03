import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  input:any;
  status: any;
  data: any;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    }
  };
  onLogin() {
    this.userService.loginUser(this.input.username, this.input.password).subscribe({
      next: (res: any)  => {
        this.data = res;
        this.status = res.status;
        alert('User ' + this.input.username + ' logged in!')
      },
      error: (error: any) => {
        console.error('error', error);
      }
    });
  }

}
