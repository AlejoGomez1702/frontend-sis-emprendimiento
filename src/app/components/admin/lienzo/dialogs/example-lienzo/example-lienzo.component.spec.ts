import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLienzoComponent } from './example-lienzo.component';

describe('ExampleLienzoComponent', () => {
  let component: ExampleLienzoComponent;
  let fixture: ComponentFixture<ExampleLienzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLienzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
