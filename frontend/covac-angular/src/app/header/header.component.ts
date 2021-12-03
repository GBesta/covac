import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean = true;
  constructor(private userService : UserService, private appointmentService : AppointmentService) {}   
  
  ngOnInit(): void {
  }

  logOut(){
    this.userService.logOut()
  }
  getUsername(): boolean{
    var variable = this.userService.getUser().username
    if (variable == ""){
      return true
    }
    return false
  }
}
