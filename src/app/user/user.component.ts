import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() firstName: any = ""
  //creating an event with Output decorator
  @Output() onAlert = new EventEmitter()
  showAlert(){
    this.onAlert.emit("Data from Child Component")
  }
}
