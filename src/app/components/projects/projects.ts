import { Component } from '@angular/core';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <div class="p-3">
      <div class="flex justify-between">
        <div class="text-2xl mb-5">Some of my project:</div>
        <a href="/projects" class="underline">See more</a>
      </div>

      <div>
        @for (project of projects; track project.projectName) {
          <a [href]="project.projectLink" target="_blank">
            <div class="border-b border-t border-zinc-600">
              <div class="text-xl my-3">
                {{project.projectName}}
              </div>
              <div class="text-sm mb-3 text-zinc-400">
                {{project.projectDescription}}
              </div>
            </div>
          </a>
          }
      </div>
    </div>
  `,
  styles: ``,
})
export class Projects {
  projects: Project[] = [
    {
      projectName: 'Frontend eindProject',
      projectDescription: `For my final school project, I decided to create a stock brokerage app. 
      I wanted a project that would challenge me while allowing me to apply all the technologies I’ve learned so far. 
      To achieve this, I chose to build the application using React and Tailwind, as they offer a modern, efficient, 
      and flexible way to develop a clean and responsive user interface. 
      This project gave me the opportunity to deepen my understanding of front-end development and bring together everything 
      I’ve practiced throughout my studies.`,
      projectLink: 'https://github.com/Lars-Schipper/Frontend-Project',
    },
    {
      projectName: 'Exam Frontend',
      projectDescription: `This is the frontend exam we completed for the Frontend Development elective. 
      The exam was built using React and Bootstrap. I successfully completed this elective with a 9.2, 
      which I’m very proud of. The project allowed me to put my knowledge into practice and demonstrate how much 
      I’ve learned over the past period.`,
      projectLink: 'https://github.com/Lars-Schipper/Examen-Frontend-Development',
    },
    {
      projectName: 'Exam Mobile',
      projectDescription: `This is the Mobile Development exam, which we completed as part of one of our elective modules. 
      The exam was built using React Native, allowing us to create a functional mobile application. 
      I successfully finished this elective with a 9.2, which I’m very proud of. 
      This project gave me the chance to apply my mobile development skills and showcase how much I’ve grown throughout the course.`,
      projectLink: 'https://github.com/Lars-Schipper/Examen-Mobile-Development',
    },
  ]
}
