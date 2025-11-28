import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-currently-learning',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
  <div class="p-3">
    
    <div class="flex justify-between">
      <p class="mb-5">
        Currently i am learning <span class="text-xl font-bold">Angular</span>.
      </p>

      <div>
        <img ngSrc="/angularLogo.png" height="30" width="120" priority />
      </div>
    </div>
    
    <p class="text-sm text-zinc-400 mb-2"> 
      I’m learning Angular because the next stage of my work will involve using it as the primary front-end framework.
    </p>
    <p class="text-sm text-zinc-400"> 
      Angular is widely used in the industry, especially for large and enterprise-level applications, so gaining experience with it will open the door to more professional opportunities.
    </p>
    <p class="text-sm text-zinc-400"> 
      Since Angular is built with TypeScript, it also helps me strengthen my TypeScript skills, which are increasingly important in modern web development.
    </p>
    <p class="text-sm text-zinc-400"> 
      This website is built with Angular for the same reason—it gives me a practical way to apply what I’m learning and deepen my understanding of how real Angular projects are structured.
    </p>
  </div>
  `,
  styles: ``,
})
export class CurrentlyLearning {

}
