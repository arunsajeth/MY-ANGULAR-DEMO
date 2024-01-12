import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDeptDirective]'
})
export class DeptDirectiveDirective implements OnInit {
  
  @Input() dept:any

  constructor(private e1:ElementRef, private render:Renderer2) {
      this.render.setStyle(this.e1.nativeElement,'background-color','green')
   }

   ngOnInit(): void {
     
    if(this.dept=='IT')
    {
      this.render.setStyle(this.e1.nativeElement,'background-color','yellow')
    }
    else if(this.dept=='REP')
    {
      this.render.setStyle(this.e1.nativeElement,'background-color','ivory')
    }
    else if(this.dept=='ADMIN')
    {
      this.render.setStyle(this.e1.nativeElement,'background-color','lightgreen')
    }
    else if(this.dept=='TRAINER')
    {
      this.render.setStyle(this.e1.nativeElement,'background-color','aqua')
    }

   }

   @HostListener('mouseover')
   mouseover()
   {
    this.render.setStyle(this.e1.nativeElement,'opacity','0.5')
   }

   @HostListener('mouseout')
   mouseout()
   {
    this.render.setStyle(this.e1.nativeElement,'opacity','1')
   }


}
