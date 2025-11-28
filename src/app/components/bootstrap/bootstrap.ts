import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  imports: [],
  standalone: true,
  template: `
    <div class="grid grid-cols-2">
      <div class="lg:me-3">
        <p class="text-2xl">
          Bootstrap
        </p>

        <p class="text-sm text-zinc-400 mt-3">
          For my final assignment in the Bootstrap module, 
          I created a personal portfolio website. 
          This project allowed me to apply responsive design principles and experiment with components like grids, 
          cards, and navigation bars. 
          It’s also my first website hosted live, thanks to Vercel, 
          which made deployment smooth and straightforward.
        </p>
        
        <p class="text-sm text-zinc-400 mt-2">
          Click <a class="text-zinc-300 underline" target="_blank" href="https://bootstrap-test-indol.vercel.app/">here</a> to view the live portfolio
        </p>
      </div>

      <div class="self-center">
        <img class="rounded-2xl border-zinc-600 border" src="/bootstrap.png" alt="bootstrap portfolio">
      </div>
    </div>
  `,
  styles: ``,
})
export class Bootstrap {

}
