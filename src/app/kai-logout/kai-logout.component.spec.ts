import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiLogoutComponent } from './kai-logout.component';

describe('KaiLogoutComponent', () => {
  let component: KaiLogoutComponent;
  let fixture: ComponentFixture<KaiLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
