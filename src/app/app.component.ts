import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavbarComponent],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
        <app-navbar [Menu]="navbarLinks" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  navbarLinks = [
    // { option: 'Inicio', linkTo: '/' },
    // { option: 'Contacto', linkTo: 'contact' },
    // { option: 'Acerca de', linkTo: 'about' },
    { label: 'Inicio' },
    { label: 'Contacto' },
    { label: 'Acerca de' },
  ];
}
