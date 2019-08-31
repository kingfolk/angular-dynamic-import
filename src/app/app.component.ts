import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {
  name = 'Angular';
  libMsg = '';

  async loadLib() {
    const {DynamicLib} = await import('./dynamic-lib');
    const lib = new DynamicLib();
    this.libMsg = lib.cheers();
  }
}
