import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    "https://i.ibb.co/ZpBqMrRt/IMG-20250120-WA0027.jpg",
    "https://i.ibb.co/TjSpcKP/IMG-20241126-WA0025.jpg",
    "https://i.ibb.co/YFfwmYTt/IMG-20241116-WA0008.jpg",
    "https://i.ibb.co/dJ2WFDsb/IMG-20241104-WA0022.jpg",
    "https://i.ibb.co/8nTbr3zT/IMG-20241017-WA0007.jpg",
    "https://i.ibb.co/x8YXnQBP/IMG-20241011-WA0017.jpg",
    "https://i.ibb.co/XvfJMF9/IMG-20240624-WA0014.jpg",
    "https://i.ibb.co/7wVzXKX/IMG-20220428-WA0032.jpg",
    "https://i.ibb.co/67tgLTH9/IMG-20200221-WA0004.jpg",
    "https://i.ibb.co/vxKFCppF/IMG-20200210-WA0003.jpg",
    "https://i.ibb.co/CpDWrDdR/IMG-20200124-WA0011.jpg",
    "https://i.ibb.co/DPFYJrRQ/IMG-20200106-WA0086.jpg",
    "https://i.ibb.co/zWG9rpy8/IMG-20191229-WA0003.jpg",
    "https://i.ibb.co/DfHQCqjh/IMG-20191225-WA0015.jpg",
    "https://i.ibb.co/Y4qqR37g/IMG-20191215-WA0024.jpg",
    "https://i.ibb.co/b5GGfrx8/IMG-20190328-WA0004.jpg",
    "https://i.ibb.co/wNcxXBK6/20250101-125630.jpg",
    "https://i.ibb.co/FkySt6ZN/IMG-20190420-193518-937.jpg",
    "https://i.ibb.co/3YTWrgVT/20250107-122233.jpg",
    "https://i.ibb.co/pvzVQXzG/20241128-072451.jpg",
    "https://i.ibb.co/ymZyZXbg/20241009-114826.jpg",
    "https://i.ibb.co/3mpMJyQg/20240928-164709.jpg",
    "https://i.ibb.co/kVjG1xgL/20241006-085938.jpg",
    "https://i.ibb.co/hRsWMq1D/20240917-144444.jpg",
    "https://i.ibb.co/f3GqSKZ/20240423-194421.jpg",
    "https://i.ibb.co/7xQ6m5cK/20240531-195020.jpg",
    "https://i.ibb.co/tMzNXtLc/20240502-182253.jpg",
    "https://i.ibb.co/nqRstPNX/20240410-162757.jpg",
    "https://i.ibb.co/YTKwQV81/20240329-135050.jpg",
    "https://i.ibb.co/DfWQFrq5/20230302-145022-0.jpg",
    "https://i.ibb.co/Dg59yTps/20240116-120828.jpg",
    "https://i.ibb.co/nskPdFxv/20231108-171222.jpg",
    "https://i.ibb.co/KpfX2hQF/20230110-124808.jpg",
    "https://i.ibb.co/RGdQFYXx/20230110-104449.jpg",
    "https://i.ibb.co/27P13fDz/20221205-084523.jpg",
    "https://i.ibb.co/7dsXJC5k/20221024-210055.jpg",
    "https://i.ibb.co/Q7hFYbqw/20221007-141803.jpg",
    "https://i.ibb.co/SXCSXnZS/20220908-160331.jpg",
    "https://i.ibb.co/Q7gSDngx/20221001-131927.jpg",
    "https://i.ibb.co/rKvM8J0F/20220908-131801.jpg",
    "https://i.ibb.co/vCBzW9Bb/20220821-151717.jpg",
    "https://i.ibb.co/WWCyCH9H/20220815-164057.jpg",
    "https://i.ibb.co/XZncsvF6/20220708-101930.jpg",
    "https://i.ibb.co/HLx32Z9Z/20220529-164659.jpg",
    "https://i.ibb.co/rKHWxWSr/20220526-151203.jpg",
    "https://i.ibb.co/SX1T9KsD/20220205-182943.jpg",
    "https://i.ibb.co/Wpgrmk2t/20210903-165700.jpg",
    "https://i.ibb.co/23yfc8n9/20210902-125558.jpg",
    "https://i.ibb.co/ynvT7vy7/20210828-173516.jpg",
    "https://i.ibb.co/sJkTz0H3/20200117-105622.jpg",
    "https://i.ibb.co/QFWLMQKj/20200106-130740.jpg",
    "https://i.ibb.co/p6gq8zF6/20190921-142337.jpg",
    "https://i.ibb.co/G4rT877G/20190919-182346-0.jpg",
    "https://i.ibb.co/MDfHk8sx/20190917-110608.jpg",
    "https://i.ibb.co/N2kB2NtD/20190804-134926.jpg",
    "https://i.ibb.co/Txc35vtN/20190420-070201.jpg"
  ];

  currentImageIndex = 0;

  constructor() {}

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
