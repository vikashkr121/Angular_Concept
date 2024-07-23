import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../guards/un-saved-change.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements CanComponentLeave {

  // constructor(private formcontrol:FormControl){}

  userName:FormControl=new FormControl()

  canLeave():boolean{
if(this.userName.dirty){
  return window.confirm('You have some insaved changes .Save it before saving')
}
return true
  }

}
