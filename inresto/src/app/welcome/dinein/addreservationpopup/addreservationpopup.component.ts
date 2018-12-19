import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-addreservationpopup',
  templateUrl: './addreservationpopup.component.html',
  styleUrls: ['./addreservationpopup.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbTimepickerConfig, CollapseModule]
})
export class AddreservationpopupComponent implements OnInit {
  spinners = false;
  meridian = true;
  datePickerConfig: Partial<BsDatepickerConfig>;
  addReservation: FormGroup;
  preferenceFormArray: Array<any> = [];
  guestTypeFormArray: Array<any> = [];
  formErrors = {
    'fullName':'',
    'selectReservationDate':'',
    'phoneNumber':'',
    'rsvStatus':'',
    'numberOfGuests':'',
  };
  validationMessages = {
    'fullName': {
      'required':'Full Name is required',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters'
    },
    'selectReservationDate':{
      'required': 'Reservation Date is required'
    },
    'rsvStatus': {
      'required': 'Reservation Status is required'
    },
    'phoneNumber':{
      'required': 'Phone number is required'
    },
    'numberOfGuests':{
      'required': 'Number of guests is required'
    }
  };
  guestType = [
    {
      id: 1,
      name: 'VIP Guest'
    },
    {
      id: 2,
      name: 'HNI'
    },
    {
      id: 3,
      name: 'Regular'
    }
  ]
  preferences = [
    {
      id: 1,
      name: 'Smoking Area'
    },
    {
      id: 2,
      name: 'Low Music'
    },
    {
      id: 3,
      name: 'Kids Friendly'
    }
  ];
  nationality = [
    {
      id: 1,
      name: 'Indian'
    },
    {
      id: 2,
      name: 'European'
    },
    {
      id: 3,
      name: 'Nirobia'
    }
  ];
  rsvStatus = [
    {
      id: 1,
      name: 'confirmed'
    },
    {
      id: 2,
      name: 'Waitlist'
    },
    {
      id: 3,
      name: 'Arrived'
    },
    {
      id: 4,
      name: 'Partially Seated'
    }
  ];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private fb: FormBuilder) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
  }

  openLg(content) {
    this.modalService.open(content, { windowClass: 'popupwindow' });
    this.addReservation.patchValue({
      numberOfGuests: 0,
      numberOfKids: 0,
      numberOfFemale: 0,
      numberOfMale: 0,
      numberOfVegeterian: 0
      });
  }

  ngOnInit() {
    
    this.datePickerConfig = Object.assign({},
    {
      containerClass: 'theme-dark-blue',
      minDate: new Date(),
      dateInputFormat: 'DD/MM/YYYY'
    })


    this.addReservation = this.fb.group({
      fullName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      phoneNumber: [null, Validators.required],
      numberOfGuests: [' ', Validators.required],
      selectReservationDate: [null, Validators.required],
      selectReservationTime: new Date().getHours() + ':' + new Date().getMinutes(),
      numberOfKids: [' '],
      numberOfFemale: [' '],
      numberOfMale: [' '],
      numberOfVegeterian: [' '],
      nationality: [' '],
      rsvStatus: [null, Validators.required],
      anniversaryDate: [null],
      dateOfBirth: [null],
      email: [' '],
      CompanyName: [' '],
      comment: [' '],
      theSubscribeCheckbox: [' '],
      preference: [' '],
    });

    this.addReservation.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.addReservation);
    });
  }

  logValidationErrors(group: FormGroup = this.addReservation): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if(abstractControl && !abstractControl.valid && 
        (abstractControl.touched || abstractControl.dirty)){
        const messages = this.validationMessages[key];

        for(const errorKey in abstractControl.errors){
          if(errorKey){
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if(abstractControl instanceof FormGroup){
        this.logValidationErrors(abstractControl);
      }

    });
  }

  add():void {
    // this.addReservation.controls.numberOfGuests = this.addReservation.controls.numberOfMale + this.addReservation.controls.numberOfFemale + this.numberOfKids;
  } 
  
  onPreferenceChange(prefer:string, isChecked: boolean) {
    if(isChecked) {
      this.preferenceFormArray.push(prefer);
    } else {
      let index = this.preferenceFormArray.indexOf(prefer);
      this.preferenceFormArray.splice(index,1);
    }
  }

  onGuestTypeChange(guest:string, isChecked: boolean) {
    if(isChecked) {
      this.guestTypeFormArray.push(guest);
    } else {
      let index = this.guestTypeFormArray.indexOf(guest);
      this.guestTypeFormArray.splice(index,1);
    }
  }

  onSubmit():void {
    console.log(this.addReservation.value);
  }
  
}
