import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean = true;
  constructor(private userService : UserService) {}   
  
  ngOnInit(): void {
  }

  logOut(){
    this.userService.logOut()
  }
  getUsername(): boolean{
    var variable = this.userService.getUser().username
    console.log(variable)
    if (variable == ""){
      return true
    }
    return false
    }
}
