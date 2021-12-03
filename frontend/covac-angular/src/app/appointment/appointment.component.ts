import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { UserService } from '../user.service';

export interface Appointment {
  _id: string;
  appointmentDate: string;
  name: string;
  place: string;
}


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  id : string;
  appointmentDate: string;
  name: string;
  place: string;

  constructor(private appointmentService: AppointmentService, private userService: UserService) {
    this.successMsg = "";
    this.errorMsg = "";
    this.id = "";
    this.appointmentDate = "";
    this.name = "";
    this.place = "";
   }

  ngOnInit() {
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.id = this.userService.getToken();
    this.appointmentService.createAppointment(this.id, this.appointmentDate, this.name, this.place)
      .subscribe({ next: (createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.place = '';
        this.successMsg = `Appointment Booked Successfully`;
      },
      error: (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      }
      });
  }
}