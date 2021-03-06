import { Component, OnInit } from '@angular/core';

export interface SymptomsData {
  covid: string;
  symptom: string;
  flu: string;
  cold: string;
}
const SYMPTOMS_DATA: SymptomsData[] = [
  {symptom: 'days', covid: '2-14', flu: '1-4', cold: '1-3'},
  {symptom: 'Fever', covid: 'Common', flu: 'Common', cold: 'Rare'},
  {symptom: 'Cough', covid: 'Common', flu: 'Common', cold: 'Mild to moderate'},
  {symptom: 'Fatigue', covid: 'Common', flu: 'Common', cold: 'Mild'},
  {symptom: 'Difficulty breathing', covid: 'Common', flu: 'Rare', cold: 'Rare'},
  {symptom: 'Body aches', covid: 'Sometimes', flu: 'Common', cold: 'Mild'},
  {symptom: 'Sore throat', covid: 'Sometimes', flu: 'Sometimes', cold: 'Common'},
  {symptom: 'Headache', covid: 'Sometimes', flu: 'Common', cold: 'Rare'},
  {symptom: 'Chills', covid: 'Sometimes', flu: 'Sometimes', cold: 'Rare'},
  {symptom: 'Smell and taste loss', covid: 'Sometimes', flu: 'Rare', cold: 'Rare'},
  {symptom: 'Sneezing', covid: 'Rare', flu: 'Sometimes', cold: 'Common'}
];

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent  {

  // constructor() { }

  // ngOnInit(): void {
  // }

  displayedColumns: string[] = ['symptom', 'covid', 'flu', 'cold'];
  dataSource = SYMPTOMS_DATA;
  

}
