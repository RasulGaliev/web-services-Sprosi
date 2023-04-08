import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Specialists} from "../../models/specialists";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  specialists: Specialists[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    console.log('parent init');
    this.http.get<Specialists[]>('C:/Users/Rasul/AngularProjects/sprosi/src/s.json').subscribe(specialists => {
      console.log(specialists);
      this.specialists = specialists;
    })
  }
}
