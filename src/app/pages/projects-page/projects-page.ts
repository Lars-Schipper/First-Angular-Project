import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

import { InfestPro } from '../../components/infest-pro/infest-pro';
import { MyProjects } from '../../components/my-projects/my-projects';
import { BackendEindProject } from '../../components/backend-eind-project/backend-eind-project';
import { MobileKeuzendeel } from '../../components/mobile-keuzendeel/mobile-keuzendeel';
import { Bootstrap } from '../../components/bootstrap/bootstrap';
import { Angular } from '../../components/angular/angular';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [InfestPro, MyProjects, BackendEindProject, MobileKeuzendeel, Bootstrap, Angular, CommonModule],
  template: `
    <div class="p-5 pt-18 bg-zinc-700">
     
    <div class="grid grid-cols-8 xl:grid-rows-7 gap-5 min-h-[calc(100vh-136px)] text-white">
    
        <div class="fade-item col-span-8 lg:col-span-3 xl:col-span-5 row-span-1 xl:row-span-3 p-5 rounded-2xl bg-zinc-800"> 
          <app-my-projects/>
        </div>

        <div class="fade-item col-span-8 lg:col-span-5 row-span-1 xl:col-span-3 xl:row-span-4 p-5 rounded-2xl bg-zinc-800">
          <app-infest-pro/>
        </div>

        <div class="fade-item col-span-8 lg:col-span-2 xl:col-span-3 row-span-1 xl:row-span-2 p-5 rounded-2xl bg-zinc-800">
          <app-angular/>
        </div>
        
        <div class="fade-item col-span-8 lg:col-span-6 xl:col-span-2 row-span-1 xl:row-span-5 p-5 rounded-2xl bg-zinc-800">
          <app-mobile-keuzendeel/>
        </div>

        <div class="fade-item col-span-8 lg:col-span-4 xl:col-span-3 row-span-1  xl:row-span-4 p-5 rounded-2xl bg-zinc-800">
          <app-backend-eind-project/>
        </div>
        
        <div class="fade-item col-span-8 lg:col-span-4 xl:col-span-3 row-span-1  xl:row-span-3 p-5 rounded-2xl bg-zinc-800">
          <app-bootstrap/>
        </div>

      </div>
    </div>
  `,
  styles: ``,
})

export class ProjectsPage implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.from('.fade-item', {
      x:-60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power2'
    })
  }
}
