import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {
  //@INJECT serve para dizer qual STRING o angular deve colocar nessa string
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
