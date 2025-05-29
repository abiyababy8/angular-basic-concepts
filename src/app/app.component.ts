import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DummyComponent } from './dummy/dummy.component';
//import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, DummyComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-concept';
}
