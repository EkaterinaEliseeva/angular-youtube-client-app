import { NgModule } from '@angular/core';
import SearchItemComponent from 'src/app/features/youtube/components/search-results/search-item/search-item.component';
import SearchResultsComponent from 'src/app/features/youtube/components/search-results/search-results.component';
import SortingComponent from 'src/app/features/youtube/components/sorting/sorting.component';
import HighlightPublicationStatusDirective
  from 'src/app/features/youtube/directives/highlight-publication-status.directive';
import SortingPipe from 'src/app/features/youtube/pipes/sorting.pipe';
import YoutubeComponent from 'src/app/features/youtube/youtube.component';
import SharedModule from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import DetailedPageComponent from './pages/detailed-page/detailed-page.component';
import ItemStatisticsComponent from './components/item-statistics/item-statistics.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SortingComponent,
    HighlightPublicationStatusDirective,
    SortingPipe,
    DetailedPageComponent,
    ItemStatisticsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    YoutubeComponent,
  ],
})
export default class YoutubeModule { }
