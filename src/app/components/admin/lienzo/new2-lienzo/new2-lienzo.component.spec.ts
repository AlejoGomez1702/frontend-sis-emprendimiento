import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New2LienzoComponent } from './new2-lienzo.component';

describe('New2LienzoComponent', () => {
  let component: New2LienzoComponent;
  let fixture: ComponentFixture<New2LienzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New2LienzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New2LienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
