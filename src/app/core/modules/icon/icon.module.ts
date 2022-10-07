import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export default class IconModule {
  private iconsPath = '/assets/icons/icon-%s.svg';

  constructor(
    private readonly domSanitizer: DomSanitizer,
    public readonly matIconRegistry: MatIconRegistry,
  ) {
    matIconRegistry
      .addSvgIcon('iconViewed', this.setPath('viewed'))
      .addSvgIcon('iconLiked', this.setPath('liked'))
      .addSvgIcon('iconDisliked', this.setPath('disliked'))
      .addSvgIcon('iconSaved', this.setPath('saved'))
      .addSvgIcon('iconProfile', this.setPath('profile'))
      .addSvgIcon('iconSettings', this.setPath('settings'))
      .addSvgIcon('iconSorting', this.setPath('sorting'))
      .addSvgIcon('iconSortingArrow', this.setPath('sort-arrow'));
  }

  private setPath(iconName: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.iconsPath.replace('%s', iconName));
  }
}
