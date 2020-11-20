import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMaslowComponent } from './welcome-maslow.component';

describe('WelcomeMaslowComponent', () => {
  let component: WelcomeMaslowComponent;
  let fixture: ComponentFixture<WelcomeMaslowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMaslowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMaslowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
