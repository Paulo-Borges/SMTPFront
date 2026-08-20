import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SMTPFront');
}
