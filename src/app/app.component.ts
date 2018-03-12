import { Component, OnInit } from '@angular/core';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular node application';
  sampleData: any = [];

  constructor( private sampleService: SampleService ) { }
  ngOnInit() {
  	this.sampleService.get().subscribe(
      data => {
        this.sampleData = data;
      },
      error => { console.log(error); }
      );
  }
}

