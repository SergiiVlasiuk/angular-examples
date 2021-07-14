import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFiddleGridWithColumnSpansComponent } from './js-fiddle-grid-with-column-spans.component';

describe('JsFiddleGridWithColumnSpansComponent', () => {
  let component: JsFiddleGridWithColumnSpansComponent;
  let fixture: ComponentFixture<JsFiddleGridWithColumnSpansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFiddleGridWithColumnSpansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFiddleGridWithColumnSpansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
