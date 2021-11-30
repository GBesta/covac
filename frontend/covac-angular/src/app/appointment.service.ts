import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Appointment } from './appointment/appointment.component';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment/appointment.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private BASE_URL =  "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.BASE_URL}/appointments`);
  }

  createAppointment(token: string, appointmentDate: string, name: string, place: string): Observable<Appointment> {
    return this.http.patch<Appointment>(`${this.BASE_URL}/api/users/`, {token, appointmentDate, name, place });
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/appointments/${id}`);
  }
}