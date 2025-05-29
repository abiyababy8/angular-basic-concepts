import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-about',
  imports: [UserComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  dataToSend = "Sean"
  getMessage(data: any) {
    alert(data)
  }
}
