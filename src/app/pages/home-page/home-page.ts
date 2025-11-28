import { Component } from '@angular/core';
import { AboutMe } from '../../components/about-me/about-me';
import { CurrentlyLearning } from '../../components/currently-learning/currently-learning';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutMe, CurrentlyLearning, Projects, Skills, ],
  template: `
    <div class="p-5 pt-18 bg-zinc-700">
      <div class="grid grid-cols-8 lg:grid-rows-3 gap-5 min-h-[calc(100vh-136px)]">
        
        <div class="col-span-8 md:col-span-4 lg:row-span-1 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-about-me/>
        </div>
        
        <div class="col-span-8 md:col-span-4 lg:row-span-2 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-skills/>
        </div>

        <div class="col-span-8 md:col-span-4 lg:row-span-2 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-projects/>
        </div>

        <div class="col-span-8 lg:col-span-4 rounded-2xl bg-zinc-800 text-zinc-100 px-5 py-3">
          <app-currently-learning/>
        </div>

      </div>
    </div>
  `,
  styles: ``,
})
export class HomePage {

}
