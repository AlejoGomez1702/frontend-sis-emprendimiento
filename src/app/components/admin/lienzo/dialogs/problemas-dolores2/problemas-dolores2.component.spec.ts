import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasDolores2Component } from './problemas-dolores2.component';

describe('ProblemasDolores2Component', () => {
  let component: ProblemasDolores2Component;
  let fixture: ComponentFixture<ProblemasDolores2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemasDolores2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemasDolores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
