import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCartHighlight]',
  standalone: true,
})
export class CartHighlightDirective {
  constructor(private ele: ElementRef) {}
  @HostListener('mouseover') onMouseEnter() {
    this.applyShadow('0 4px 8px rgba(204, 18, 18, 0.9)');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.applyShadow(null);
  }
  private applyShadow(shadow: string | null) {
    this.ele.nativeElement.style.boxShadow = shadow;
  }
}
