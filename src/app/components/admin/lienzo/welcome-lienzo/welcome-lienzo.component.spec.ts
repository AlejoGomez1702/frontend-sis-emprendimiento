import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLienzoComponent } from './welcome-lienzo.component';

describe('WelcomeLienzoComponent', () => {
  let component: WelcomeLienzoComponent;
  let fixture: ComponentFixture<WelcomeLienzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeLienzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
