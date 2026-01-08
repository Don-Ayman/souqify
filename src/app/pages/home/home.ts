import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],   // ⚡ c'était styleUrl au singulier, erreur
  standalone: true
})
export class Home {}
