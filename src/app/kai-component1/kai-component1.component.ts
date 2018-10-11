import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kai-component1',
  templateUrl: './kai-component1.component.html',
  styleUrls: ['./kai-component1.component.css']
})
export class KaiComponent1Component implements OnInit {
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
  //   .pipe(
  //     map(result => result.matches)
  //   );
  // isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.TabletPortrait)
  //   .pipe(
  //     map(result => result.matches)
  //   );
  // isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.WebPortrait)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  isXsmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches)
    );
  isSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small)
    .pipe(
      map(result => result.matches)
    );
  isMedium$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
    .pipe(
      map(result => result.matches)
    );
  isLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
    .pipe(
      map(result => result.matches)
    );
  isXlarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XLarge)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
