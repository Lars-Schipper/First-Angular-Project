import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  standalone: true,
  template: `
    <p>
      Oeps! er is iets misgegaan.
    </p>

    <a routerLink="/" class="text-red-500">Klik <span class="underline">hier</span> om terug te gaan</a>
  `,
  styles: ``,
})
export class NotFoundPage {

}
