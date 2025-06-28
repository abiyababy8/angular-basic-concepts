import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about',
  imports: [UserComponent, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  //define property for holding value of each input box
  userEmail: string = ""
  firstname: string = ""
  password: string = ""
  dataToSend = "Sean"
  constructor(private api: ApiService) { }
  getMessage(data: any) {
    alert(data)
  }
  register() {
    alert(`${this.userEmail}, ${this.firstname}, ${this.password}`)
  }
  resetCount() {
    this.api.resetSignalValue()
  }
}
