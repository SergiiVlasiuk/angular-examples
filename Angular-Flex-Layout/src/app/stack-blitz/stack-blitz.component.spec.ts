import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackBlitzComponent } from './stack-blitz.component';

describe('StackBlitzComponent', () => {
  let component: StackBlitzComponent;
  let fixture: ComponentFixture<StackBlitzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackBlitzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackBlitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
