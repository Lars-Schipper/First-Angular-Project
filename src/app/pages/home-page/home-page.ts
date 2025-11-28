import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { CommonModule } from '@angular/common';

import { AboutMe } from '../../components/about-me/about-me';
import { CurrentlyLearning } from '../../components/currently-learning/currently-learning';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutMe, CurrentlyLearning, Projects, Skills, CommonModule ],
  template: `
    <div class="p-5 pt-18 bg-zinc-700">
      <div class="grid grid-cols-8 lg:grid-rows-3 gap-5 min-h-[calc(100vh-136px)]">
        
        <div class="fade-item-1 col-span-8 md:col-span-4 lg:row-span-1 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-about-me/>
        </div>
        
        <div class="fade-item-2 col-span-8 md:col-span-4 lg:row-span-2 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-skills/>
        </div>

        <div class="fade-item-3 col-span-8 md:col-span-4 lg:row-span-2 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-projects/>
        </div>

        <div class="fade-item-4 col-span-8 lg:col-span-4 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-currently-learning/>
        </div>

      </div>
    </div>
  `,
  styles: ``,
})

export class HomePage implements AfterViewInit {  
  ngAfterViewInit(): void {
    gsap.from('.fade-item-1', {
      y:-60,
      opacity: 0, 
      duration: 1,
      stagger: 0.1,
      ease: 'power2'
    });

    gsap.from('.fade-item-2', {
      x:60, 
      delay: 0.2,
      opacity: 0, 
      duration: 1,
      stagger: 0.1,
      ease: 'power2'
    });

    gsap.from('.fade-item-3', {
      x:-60, 
      delay: 0.4,
      opacity: 0, 
      duration: 1,
      stagger: 0.1,
      ease: 'power2'
    });

    gsap.from(`.fade-item-4`, {
      y:60,
      delay: 0.6,
      opacity: 0, 
      duration: 1,
      stagger: 0.1,
      ease: 'power2'
    });


    
  }
}
