import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment/appointment.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private BASE_URL =  "http://127.0.0.1:8000"
  date: string;
  name: string;
  place: string;

  constructor(private http: HttpClient) {
    this.date = "";
    this.name = "";
    this.place = "";
   }

  getAppointment(id: string){
    console.log("shevida")
    return this.http.get(`http://127.0.0.1:8000/api/users/${id}/`);
  }

  createAppointment(token: string, appointmentDate: string, name: string, place: string): Observable<Appointment> {
    return this.http.patch<Appointment>(`${this.BASE_URL}/api/users/`, {token, appointmentDate, name, place });
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/appointments/${id}`);
  }
}