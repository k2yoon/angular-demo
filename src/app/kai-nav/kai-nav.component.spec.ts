
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { KaiNavComponent } from './kai-nav.component';

describe('KaiNavComponent', () => {
  let component: KaiNavComponent;
  let fixture: ComponentFixture<KaiNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [KaiNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
