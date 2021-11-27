import { Component } from '@angular/core';
// import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ApiService]
})
export class AppComponent {
  // persons = [{name: 'test'}];

  // constructor(private api:ApiService){
  //   this.getPersons();
  // }
  // getPersons = () => {
  //   this.api.getAllPersons().subscribe({
  //     next: (data)  => {
  //       this.persons = data.results;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   })
  // }
}
