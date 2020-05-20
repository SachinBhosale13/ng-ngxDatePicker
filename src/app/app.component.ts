import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datepicker';
  datePickerConfig : Partial<BsDatepickerConfig>;

  constructor()
  {
    this.datePickerConfig = Object.assign({},{
      dateInputFormat:'DD/MM/YYYY',
      containerClass: 'theme-dark-blue',      
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 11, 31),
      showWeekNumbers: true,    
    });
  }
  //Links to refer:-
  //https://www.youtube.com/watch?v=R_QcssTIEr0
  //https://csharp-video-tutorials.blogspot.com/2018/01/customise-ngx-bootstrap-datepicker.html

  ngOnInit()
  {

  }
}
