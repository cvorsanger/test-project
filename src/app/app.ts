import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { ComingSoon } from './coming-soon/coming-soon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, ComingSoon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('test-project');
}
