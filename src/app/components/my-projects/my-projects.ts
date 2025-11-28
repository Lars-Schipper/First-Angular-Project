import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [],
  template: `
          <div class="text-2xl mb-3">
            My Projects:
          </div>

          <div class="text-sm text-zinc-400">
            <p class="mb-2">
              During the past 1.5 years studying at ROC Midden Nederland, 
              I worked on a wide range of projects as part of the NexEd learning environment. 
              NexEd structures the program into modules of increasing difficulty, 
              allowing me to gradually develop my programming skills—from basic web development to 
              more advanced software-engineering concepts.
            </p>

            <p class="mb-2">
              Over this period, I completed numerous assignments and two official exams, 
              each designed to demonstrate my growth as a developer. 
              These projects covered topics such as front-end development, 
              back-end programming, databasesand APIs.
            </p>

            <p class="mb-2">
              One of my key projects was the <a target="_blank" class="underline text-zinc-300" href="https://frontend-project-sixtynine.vercel.app/">Stock Brokerage App</a>, 
              where I built an interactive application that simulates buying and selling stocks. 
              This project helped me strengthen my understanding of JavaScript logic, data handling, 
              UI design, and user-input validation. Alongside this, I worked on many other module-based projects, 
              including small utilities, web apps, API-driven tools, 
              and practice assignments that improved my problem-solving skills.
            </p>

            <p class="mb-2">
              Overall, my time at ROC Midden Nederland has given me hands-on experience with real programming tasks, 
              continuous skill-building through NexEd, 
              and a strong foundation for further development as a software developer.
            </p>
          </div>
  `,
  styles: ``,
})
export class MyProjects {

}
