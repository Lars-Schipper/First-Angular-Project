import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  
  <nav class="bg-zinc-700/30 text-white border-b-3 border-zinc-600 backdrop-blur-lg fixed top-0 w-screen">
    <div class="flex justify-between">
      <a routerLink="/" class="text-2xl mt-2 mx-3 text-nowrap">Lars Schipper</a>
      
      <div class="flex">
        <a routerLink="/" class="px-4 py-3 rounded-full hover:bg-zinc-700 text-nowrap">About Me</a>
        <a routerLink="/projects" class="px-4 py-3 rounded-full hover:bg-zinc-700 text-nowrap">My Projects</a>
      </div>
    </div>
  </nav>

  <main class="min-h-[calc(100vh-96px)]">
    <router-outlet/>
  </main>

  <footer class="bg-zinc-800 text-zinc-700 p-3">
    <p>hey! This is my amzing footer!</p>
  </footer>

  `,
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('First-Angular-App');
}
