import { Component, OnInit } from '@angular/core';

import { LibService } from './lib.service';
import { DynamicLibraryInterface } from '../dynamic-library/dynamic-library-interface';

@Component({
  selector: 'lib-lib',
  template: `
    <p>
      lib {{dynamicLibMsg}}
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {
  dynamicLibMsg = '';

  constructor(private libService: LibService) { }

  ngOnInit() {
    this.onLibLoad();
  }

  async onLibLoad() {
    const libCtor = await this.libService.libLoaded;
    const dynamicLib = new libCtor();
    this.dynamicLibMsg = dynamicLib.launchMoon();
  }

}
