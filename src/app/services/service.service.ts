import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable ,empty , BehaviorSubject} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url : string = "http://localhost:3000/contacts";
  public searchResults : any ;

  constructor( private http: HttpClient) { }

  get() :Observable <any>{
   return this.http.get<any>(this.Url);
  }

  post(newContact) :Observable <any>{
    return this.http.post<any>(this.Url , newContact );
  }

  delete(contactId) :Observable <any>{
    return this.http.delete<any>(this.Url +'/'+ contactId );
  }

  // shared data between component
  private content = new BehaviorSubject<any>(null);
  sharedData = this.content.asObservable();
  updateData(text : any){
    this.content.next(text);
   }

  //make a call to http api in search 

  searchEntries(term) : Observable<any>{
    if(term === ""){
      console.log('No Results');
      return empty();
    }else{
      let params = {q: term};
      return this.http.get(this.Url , {params}).pipe(
        map(response =>{
          console.log(response);
          return this.searchResults = response["itmes"];
        })
      )
    }
  }
  //return the response 
  _searchEntries(term){
    return this.searchEntries(term);
  }
}

