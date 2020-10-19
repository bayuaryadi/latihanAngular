import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }

 
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
     
  }



}
