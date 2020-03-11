import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterListsComponent } from './footer-lists.component';

describe('FooterListsComponent', () => {
  let component: FooterListsComponent;
  let fixture: ComponentFixture<FooterListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
