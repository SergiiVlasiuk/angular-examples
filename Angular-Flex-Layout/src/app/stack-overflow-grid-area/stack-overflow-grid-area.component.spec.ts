import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackOverflowGridAreaComponent } from './stack-overflow-grid-area.component';

describe('StackOverflowGridAreaComponent', () => {
  let component: StackOverflowGridAreaComponent;
  let fixture: ComponentFixture<StackOverflowGridAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackOverflowGridAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackOverflowGridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
