import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service'; 
import {  FormControl } from '@angular/forms';
import { Subject, throwError } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from "rxjs/operators";
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
 contactList$;
 receivedData: any;
 myControl = new FormControl('');
 loading : boolean ;
 searchTerm = new Subject<string>();
 searchResults : any ;
 pagElements : any ;
 errorMessage : any;

  constructor( private service: ServiceService ,private router :Router ) {}

  ngOnInit() {
    this.getContactList();
    this.search();
    this.service.sharedData.subscribe((data) => {
          this.receivedData = data;
      console.log('receivedData', this.receivedData);
    });
  }

  getContactList(){
    this.service.get().subscribe(response =>{
      this.contactList$ = response;
     // console.log(response);
    })
  }
 
  postNewContact(){
    this.service.post(this.receivedData).subscribe(response =>{
      this.getContactList();
      //console.log(response);
    })
  }

  deleteContact(contactId : any){
   console.log(contactId);
  //let index = this.contactList$.indexOf(contactId);
  //console.log(index);
   this.service.delete(contactId).subscribe(() =>{
    // this.contactList$.splice(index,1) ;
    this.getContactList()
   })
  }

  search(){
    this.searchTerm.pipe(
      map((e : any) =>{
        console.log(e.target.value);
        return e.target.value ;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term =>{
        this.loading = true;
        return this.service._searchEntries(term);
      }),
      catchError(e => {
        console.log(e);
        this.loading = false ;
        this.errorMessage = e.message ;
        return throwError(e)
      }),
    ).subscribe(v => {
      this.loading = true;
      this.searchResults = v ;
      this.pagElements = this.searchResults;
    })
  }

  addContact(){
   this.router.navigate(['/addcontact'])
  } 

}
