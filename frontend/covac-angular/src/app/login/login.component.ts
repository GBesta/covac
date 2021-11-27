import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  input:any;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    }
  };
  onLogin() {
    this.userService.loginUser(this.input).subscribe({
      next: ()  => {
        console.log();
        alert('User ' + this.input.username + ' logged in!')
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }

}
