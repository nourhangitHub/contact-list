import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AddcontactComponent } from './addcontact/addcontact.component';


const routes: Routes = [
  {path: "", redirectTo: "contactlist", pathMatch: "full"},
  {path: "contactlist" ,component: ContactlistComponent},
  {path: "addcontact" ,component: AddcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
