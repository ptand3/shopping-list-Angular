import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.scss']
})
export class SlickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  slides = [
    {img: "../../../assets/recipe_image1.jpeg"},
    {img: "../../../assets/recipe_imag2.jpeg"},
    {img: "../../../assets/recipe_image3.jpeg"},
    {img: "../../../assets/recipe_imag4.jpeg"},
    
  ];
 
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  };
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
 
 
}
