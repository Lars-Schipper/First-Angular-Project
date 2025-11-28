import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="p-3 text-2xl">
      About Me:
    </div>

    <div class="text-sm px-3 pb-3">
      <p class="my-1">
        My name is Lars, 
      </p>
      <p>
        and I’m currently in my second year of Software Development at ROC Midden Nederland. 
        I enjoy programming, gaming, and cooking. Before I started studying software development, 
        I worked in the kitchen of a Michelin-star restaurant, 
        where I developed a strong work ethic and a passion for creating high-quality experiences.
      </p>
    </div>

    <div class="mt-15 flex justify-center">
      <a href="https://github.com/Lars-Schipper">
        <img class="ms-3" ngSrc="/github.png" height="30" width="30" alt="Github logo">
      </a>

      <a href="https://www.linkedin.com/in/lars-schipper-061905355/">
        <img class="ms-3" ngSrc="/InBug.png" height="30" width="30" alt="Linkedin logo">
      </a>
    </div>
  `,
  styles: ``,
})
export class AboutMe {

}
