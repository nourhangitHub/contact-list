import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl , Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
  myForm; 
  imgUrl : string ="../../assets/images/anyPerson.jpg";
  keyphones : string[] = ["+444" , "+555" , "+777" , "+978" , "+960" ];
  fileToUpload : File = null; 
  constructor( private fb : FormBuilder ,private router : Router , private service : ServiceService) {
    this.myForm = this.fb.group({
      FristName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      phone : new FormControl('',Validators.required),
      key_phone : new FormControl('',Validators.required),
      email :  new FormControl('',[ Validators.required,Validators.email])
    })
   }
  get FristName() { return this.myForm.controls.FristName; }
  get lastName() { return this.myForm.controls.lastName; }
  get phone() { return this.myForm.controls.phone; }
  get key_phone() { return this.myForm.controls.key_phone; }
  get email() { return this.myForm.controls.email; }

  ngOnInit() {
  }
  submit(){
    this.service.updateData(this.myForm.value);
    this.router.navigate(['/contactlist']);
  }
  cancel(){
    this.router.navigate(['/contactlist']);
    this.myForm.reset();
  }
   
  chooseImage(file : FileList){
     this.fileToUpload = file.item(0);
     var reader = new FileReader();
     reader.onload = (event : any ) =>{
       this.imgUrl = event.target.result ;
     }
     reader.readAsDataURL(this.fileToUpload);
  } 
}
