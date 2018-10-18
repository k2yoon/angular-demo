import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kai-nav',
  templateUrl: './kai-nav.component.html',
  styleUrls: ['./kai-nav.component.css']
})
export class KaiNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  notDesktop$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );
  isMobile$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches)
    );
  notMobile$: Observable<boolean> = this.breakpointObserver.observe(
    [Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge
    ]).pipe(
      map(result => result.matches)
    );
  isDesktop$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  }
