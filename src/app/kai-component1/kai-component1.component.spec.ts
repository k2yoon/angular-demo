import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiComponent1Component } from './kai-component1.component';

describe('KaiComponent1Component', () => {
  let component: KaiComponent1Component;
  let fixture: ComponentFixture<KaiComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
