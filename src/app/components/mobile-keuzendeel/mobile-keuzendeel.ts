import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-keuzendeel',
  standalone: true,
  imports: [],
  template: `
    <div class="max-md:grid max-md:grid-cols-2">
      <div class="">
        <p class="text-2xl">
          Mobile elective
        </p>

        <p class="text-sm text-zinc-400">
          In this elective, we explored mobile app development using React Native. 
          We learned to build cross-platform apps, design interfaces, 
          manage navigation, and integrate APIs. 
          By the end, we were able to develop and test our own mobile applications.

        </p>
        <p class="text-sm text-zinc-400 my-1 mb-3">
          If you want to see more, click <a href="https://github.com/Lars-Schipper/Examen-Mobile-Development" target="_blank" class="underline text-zinc-300">Here</a>.
        </p>

      </div>

      <div class="flex justify-center">
        <img class="rounded-4xl xl:max-h-[45vh] max-h-[50vh]" src="/MobileApp.png" alt="">
      </div>
    </div>
  `,
  styles: ``,
})
export class MobileKeuzendeel {

}
