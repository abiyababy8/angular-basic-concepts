import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { FormsModule } from '@angular/forms';

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
  getMessage(data: any) {
    alert(data)
  }
  register(){
    alert(`${this.userEmail}, ${this.firstname}, ${this.password}`)
  }
}
