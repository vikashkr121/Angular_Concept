import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { unSavedChangeGuard } from './guards/un-saved-change.guard';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    LocationComponent,
    FeedbacksComponent,
    HomeComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService,AuthGuard,AdminGuard,unSavedChangeGuard  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
