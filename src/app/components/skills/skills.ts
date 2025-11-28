import { Component } from '@angular/core';
import { Skill } from './skill.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="p-3">
      <p class="text-2xl mb-10">Programming languages i have learned:</p>

      <div class="">
        @for (skill of skills; track skill.id) {
          <div class="mb-1 text-sm font-medium text-heading">{{skill.language}}</div>
          <div class="w-full bg-zinc-600 rounded-full">
            <div class="bg-linear-to-bl from-cyan-200 to-gray-800 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center" [ngStyle]="{'width': skill.progress + '%'}"> {{skill.progress}}%</div>
          </div>
        } 
      </div>
    </div>
  `,
  styles: ``,
})
export class Skills {
  skills: Skill[] = [
    {
      id: 1,
      language: 'Javascript',
      progress: 85,
    },
    {
      id: 2,
      language: 'Javascript Classes',
      progress: 65,
    },
    {
      id: 3,
      language: 'React',
      progress: 75,
    },
    {
      id: 4,
      language: 'Typescript',
      progress: 50,
    },
    {
      id: 5,
      language: 'HTML',
      progress: 100,
    },
    {
      id: 6,
      language: 'CSS',
      progress: 75,
    },
    {
      id: 7,
      language: 'Bootstrap',
      progress: 100,
    },
    {
      id: 8,
      language: 'Tailwind',
      progress: 85,
    },
    {
      id: 9,
      language: 'Jasmine',
      progress: 60,
    },
    {
      id: 10,
      language: 'Cypress',
      progress: 60,
    },
    {
      id: 11,
      language: 'MySql',
      progress: 70,
    },
    {
      id: 12,
      language: 'Php',
      progress: 65,
    },
  ];
}
