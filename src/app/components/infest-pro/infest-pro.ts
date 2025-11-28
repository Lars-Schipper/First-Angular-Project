import { Component } from '@angular/core';

@Component({
  selector: 'app-infest-pro',
  standalone: true,
  imports: [],
  template: `
    <div class="text-white text-2xl mb-5">
            Invest Pro: 
          </div>
          <p class="text-sm text-zinc-400 mb-3">
            InvestPro is the project I am currently working on. 
            For my previous backend exam, I built a stock brokerage application using PHP and JavaScript, 
            but now I am recreating it with React and Tailwind to apply everything Ive learned since then. 
            This updated version allows me to explore modern front-end development, improve my UI/UX skills, and work with more advanced component-based architecture. InvestPro is also one of the first projects I’ve deployed using Vercel.
            Click <a href="https://frontend-project-sixtynine.vercel.app/" class="underline text-zinc-300" target="_blank">here</a> to view the project.
          </p>
          <div>
            <img src="/infestProHomePage.png" class="w-full border border-zinc-700 rounded-2xl" alt="ScreenShot van infestPro home page">
          </div>
  `,
  styles: ``,
})
export class InfestPro {

}
