import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import IconsEnum from 'src/app/core/enums/icons.enum';

@Injectable()
class IconService {
  private iconsPath = '/assets/icons/%s.svg';

  private icons = IconsEnum;

  constructor(
    private readonly domSanitizer: DomSanitizer,
    public readonly matIconRegistry: MatIconRegistry,
  ) {}

  register() {
    Object.entries(this.icons).map(([iconName, iconFileName]) => this.matIconRegistry
      .addSvgIcon(iconName, this.setPath(iconFileName)));
  }

  private setPath(iconName: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.iconsPath.replace('%s', iconName));
  }
}

export default IconService;
