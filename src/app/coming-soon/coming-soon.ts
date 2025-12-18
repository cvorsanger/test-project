import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common'

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [ NgOptimizedImage, NgStyle ],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.scss'
})
export class ComingSoon {
  @ViewChild('bulldozer') movableElement!: ElementRef;

  hideBubble: boolean = true;
  elementStyle: any = {};
  taunt: string = "Catch me if you can!";
  bulldozerSize: number = 75;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideBubble = false;
    }, 2000);
  }

  onMouseEnter(): void {
    let rect = this.movableElement.nativeElement.getBoundingClientRect();
    console.log(rect)
    let left = Math.random();
    let top =  Math.random();
    console.log("Random Left", left, "Random Top", top)
  
    let maxX = window.innerWidth - rect.width;
    let maxY = window.innerHeight - rect.height;

    left = Math.floor(left*(maxX +1) - rect.left);
    top = Math.floor(top*(maxY +1) - rect.top);
    console.log("Pos Left", left, "Pos Top", top)

    // Apply a transformation to move the element
    this.elementStyle = {
      position: 'relative',
      //left: `${left}px`,
      //top: `${top}px`,
      transform: `translate(${left}px, ${top}px)`, // Example: move up by 20px
      transition: 'transform 0.5s ease-in-out' // Smooth transition
    };
  }

  onMouseOver(): void {
    // Reset the transformation when the mouse leaves
    this.taunt = "Ahhh you caught me!!!!"
  }

  onMouseLeave(): void {
    this.taunt = "Got to be quicker than that"
  }
}
