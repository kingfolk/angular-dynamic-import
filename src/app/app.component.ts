import { Component } from '@angular/core';
import { LibService } from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {
  name = 'Angular';
  libMsg = '';

  constructor(private libService: LibService) {
  }

  async loadLib() {
    const {DynamicLib} = await import('./dynamic-lib');
    const lib = new DynamicLib();
    this.libMsg = lib.cheers();
  }

  async loadProjectLib() {
    const {DynamicLibrary} = await import('lib/src/dynamic-library');
    this.libService.loadLib(DynamicLibrary);
  }
}
