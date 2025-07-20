import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    'assets/images/111.jpg',
    'assets/images/222.avif',
    'assets/images/333.avif',
    'assets/images/444.jpeg',
  ];

  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 3000); // Change every 3 sec
  }

}
