/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight')
    highlightColor!: string;

  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor || 'white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/