import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAlignContentComponent } from './f-align-content.component';

describe('FAlignContentComponent', () => {
  let component: FAlignContentComponent;
  let fixture: ComponentFixture<FAlignContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAlignContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAlignContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
