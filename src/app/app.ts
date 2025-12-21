import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { ComingSoon } from './coming-soon/coming-soon';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [Footer, ComingSoon, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('test-project');
}
