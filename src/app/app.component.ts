import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DummyComponent } from './dummy/dummy.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, DummyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-concept';
}
