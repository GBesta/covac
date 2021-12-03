import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    username: string;
    date: string;
    name: string;
    place: string;
  
  constructor(private userService : UserService, private appointmentService : AppointmentService) {
    this.username  = this.userService.getUser().username;
    this.date = "";
    this.name = "";
    this.place = "";
    var id = (this.userService.getUser().id).toString()
    this.appointmentService.getAppointment(id).subscribe({
      next: (res:any) => {
        console.log(res);
        this.date = res['person'].appointmentDate
        this.name = res['person'].patientName
        this.place = res['person'].place
        console.log(this.date)
      }
    })
   }

  ngOnInit(): void {
  }
}
