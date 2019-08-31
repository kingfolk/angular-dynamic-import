import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { DynamicLibraryInterface } from '../dynamic-library/dynamic-library-interface';

export type Constructor<T = {}> = new (...args: any[]) => T;

export type DynamicLibraryCtor = Constructor<DynamicLibraryInterface>;

@Injectable({
  providedIn: 'root',
})
export class LibService {
  private libSubject = new Subject<Constructor<DynamicLibraryInterface>>();
  libLoaded = this.libSubject.asObservable().pipe(
    first(),
  ).toPromise();

  constructor() { }

  loadLib(libCtorPromise: DynamicLibraryCtor) {
    const libCtor = libCtorPromise;
    this.libSubject.next(libCtor);
  }
}
