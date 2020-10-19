import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  constructor(public service: EmployeService) { }

  departments = [{id: 1, value: 'Dep 1'},
                 {id: 2, value: 'Dep 2'},
                 {id: 3, value: 'Dep 3'},]; 

                

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
