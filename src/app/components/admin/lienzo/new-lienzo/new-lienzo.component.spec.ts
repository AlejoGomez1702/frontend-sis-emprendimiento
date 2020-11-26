import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLienzoComponent } from './new-lienzo.component';

describe('NewLienzoComponent', () => {
  let component: NewLienzoComponent;
  let fixture: ComponentFixture<NewLienzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLienzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
