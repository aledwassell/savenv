import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBuilderComponent } from './line-builder.component';

describe('LineBuilderComponent', () => {
  let component: LineBuilderComponent;
  let fixture: ComponentFixture<LineBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
