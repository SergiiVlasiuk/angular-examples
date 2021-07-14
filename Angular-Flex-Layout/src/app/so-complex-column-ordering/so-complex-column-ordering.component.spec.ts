import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoComplexColumnOrderingComponent } from './so-complex-column-ordering.component';

describe('SoComplexColumnOrderingComponent', () => {
  let component: SoComplexColumnOrderingComponent;
  let fixture: ComponentFixture<SoComplexColumnOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoComplexColumnOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoComplexColumnOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
