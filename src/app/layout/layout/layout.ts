import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class Layout {

  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {

        this.isMobile = result.matches;

      });

  }

}