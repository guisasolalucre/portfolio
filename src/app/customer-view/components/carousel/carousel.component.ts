import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  images: string[] = [];

  currentImageIndex = 0;

  constructor() { }

  ngOnInit() {
    this.shuffleArray();
  }

  shuffleArray() {
    this.images = this.images
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  get numberOfImagesStyle(): any {
    return {
      '--number-of-images': this.images.length.toString()
    };
  }

  prevImage(): void {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
  }

  nextImage(): void {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }

  get transformStyle(): string {
    return `translateX(-${this.currentImageIndex * 100 / this.images.length}%)`;
  }

}
