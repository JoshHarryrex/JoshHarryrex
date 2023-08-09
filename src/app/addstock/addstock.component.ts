import { Component,OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit  {
addstockform:any;
onSubmit({ value }: { value: any; }): void{}
ngOnInit(): void{
  this.addstockform=new FormGroup({
    Productname: new FormControl(''),
    Department: new FormControl(''),
    Type:new FormControl(''),
    SerialNo: new FormControl(''),
    DeviceID:new FormControl(''),
    Make:new FormControl(''),
    Model:new FormControl(''),
    Configuration:new FormControl(''),
    Floor:new FormControl(''),
    Location:new FormControl(''),
    Quantity:new FormControl(''),
    Vendor:new FormControl(''),
    ProductValue:new FormControl(''),
    PurchaseDate:new FormControl(''),
    Warranty:new FormControl(''),
    Status:new FormControl(''),
    Review:new FormControl(''),
  })
}
constructor(public formBuilder:FormBuilder){}

}
