import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozillaHolyGrailLayoutComponent } from './mozilla-holy-grail-layout.component';

describe('MozillaHolyGrailLayoutComponent', () => {
  let component: MozillaHolyGrailLayoutComponent;
  let fixture: ComponentFixture<MozillaHolyGrailLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozillaHolyGrailLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozillaHolyGrailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
