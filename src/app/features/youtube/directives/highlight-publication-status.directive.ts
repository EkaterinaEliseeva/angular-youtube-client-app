import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';
import * as moment from 'moment';
import HighlightColorsEnum from 'src/app/features/youtube/enums/highlight-colors.enum';

@Directive({
  selector: '[appHighlightPublicationStatus]',
})
export default class HighlightPublicationStatusDirective implements OnInit {
  @Input('appHighlightPublicationStatus') publicationDateString!: string;

  public color!: HighlightColorsEnum;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    const date = moment(this.publicationDateString);
    const date6MonthAgo = moment().subtract(6, 'months');
    const dateMonthAgo = moment().subtract(1, 'months');
    const date7DaysAgo = moment().subtract(7, 'days');

    this.color = HighlightColorsEnum.blue;

    if (date.isBefore(date6MonthAgo)) {
      this.color = HighlightColorsEnum.red;
    } else if (date.isAfter(date6MonthAgo) && date.isBefore(dateMonthAgo)) {
      this.color = HighlightColorsEnum.yellow;
    } else if (date.isAfter(dateMonthAgo) && date.isBefore(date7DaysAgo)) {
      this.color = HighlightColorsEnum.green;
    }

    this.renderer2.addClass(this.elementRef.nativeElement, `highlight-${this.color}`);
  }
}
