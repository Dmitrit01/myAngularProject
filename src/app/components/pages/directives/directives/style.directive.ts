import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true,
})
export class StyleDirective {
  @Input('appStyle') dStyles: {
    border?: string;
    borderRadius?: string;
    color?: string;
    background?: string;
  } = {
    border: '1px solid black',
    borderRadius: '0',
    color: 'black',
    background: 'white',
  };

  constructor(public el: ElementRef, public r: Renderer2) {}
  @HostBinding('style.color') elColor = null;
  @HostBinding('style.background') elBackground = null;
  @HostBinding('style.border') elBorder = null;

  @HostListener('click') onClick() {
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles['border']);
    this.r.setStyle(
      this.el.nativeElement,
      'borderRadius',
      this.dStyles['borderRadius']
    );
    this.r.setStyle(this.el.nativeElement, 'color', this.dStyles['color']);
    this.r.setStyle(
      this.el.nativeElement,
      'background',
      this.dStyles['background']
    );
  }
  @HostListener('mouseenter') onEnter() {
    this.elColor = 'purple';
    this.elBackground = '#E5F4B7FF';
    this.elBorder = '1px solid black';
  }
  @HostListener('mouseleave') onLeave() {
    this.elColor = 'green';
    this.elBackground = '#F4DDDDFF';
    this.elBorder = '1px solid blue';
  }
}
