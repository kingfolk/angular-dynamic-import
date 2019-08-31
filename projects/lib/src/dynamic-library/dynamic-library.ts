import { DynamicLibraryInterface } from './dynamic-library-interface';

export class DynamicLibrary implements DynamicLibraryInterface {
  launchMoon() {
    console.log('launchMoon');
    return `launch moon at ${(new Date()).toString()}`;
  }
}
