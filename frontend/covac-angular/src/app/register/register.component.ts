import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register:any;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: ''
    }
  };
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe({
      next: ()  => {
        alert('User ' + this.register.username + ' has been created!')
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }

}
