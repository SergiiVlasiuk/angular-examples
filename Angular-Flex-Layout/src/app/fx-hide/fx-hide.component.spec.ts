import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxHideComponent } from './fx-hide.component';

describe('FxHideComponent', () => {
  let component: FxHideComponent;
  let fixture: ComponentFixture<FxHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
