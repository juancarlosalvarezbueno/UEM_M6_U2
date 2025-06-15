import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'm6_u2';
}
