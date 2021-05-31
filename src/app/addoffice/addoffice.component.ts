import { Component , OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addoffice',
  templateUrl: './addoffice.component.html',
  styleUrls: ['./addoffice.component.css']
})
export class AddofficeComponent {
  office = this.fb.group({
    officeCode: [null, Validators.required],
    officeName: [null, Validators.required],
    country:     [null, Validators.required],
    phoneNumber:[null, Validators.compose([
      Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    ],
    addressLine1: [null, Validators.required],
    addressLine2: null,
    street: null,
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });



  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
    ) {}

    ngOnInit() {
      
    }

  onSubmit(): void {
    alert(this.office.value);
    console.log(this.office.value);
  }
}
