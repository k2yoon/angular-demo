
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiTableComponent } from './kai-table.component';

describe('KaiTableComponent', () => {
  let component: KaiTableComponent;
  let fixture: ComponentFixture<KaiTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
