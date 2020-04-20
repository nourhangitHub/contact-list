import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ServiceService} from './services/service.service';
import { MatDividerModule ,MatCardModule
        ,MatAutocompleteModule ,MatInputModule 
        ,MatButtonModule ,MatIconModule , MatSelectModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    MatAutocompleteModule ,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
