import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

export interface Appointment {
  _id: string;
  appointmentDate: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  appointmentDate: string;
  name: string;
  email: string;

  constructor(private appointmentService: AppointmentService) {
    this.successMsg = "";
    this.errorMsg = "";
    this.appointmentDate = "";
    this.name = "";
    this.email = "";

   }

  ngOnInit() {
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email)
      .subscribe({ next: (createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.email = '';
        const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
        this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
      },
      error: (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      }
      });
  }


}