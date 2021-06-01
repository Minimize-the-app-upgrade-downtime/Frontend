import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  employee = this.fb.group({
    employeeNumber: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    officeCode: [null, Validators.required],
    job: [null,Validators.required]
  });

  hasUnitNumber = false;

  officeCodes = [
    {name: 'Sarathchandra', abbreviation: 'bra001'},
    {name: 'LOLC', abbreviation: 'col1'},
    {name: 'Sahanma', abbreviation: 'emb011'},
    {name: 'Janashakthi', abbreviation: 'new011'},
    {name: 'Edirisinghe', abbreviation: 'new012'},
  ];

  constructor(
    private fb: FormBuilder,
    private emp: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
      
    ) {}

  onSubmit(): void {
    //console.log(this.employee.value)
    this.emp.addEmployee(this.employee.value).subscribe(
      (msg)=>{
        console.log(msg)
        this.router.navigateByUrl(`/add-office`);
      },
      (err)=>{ console.log(err)}
    )
  }
}
