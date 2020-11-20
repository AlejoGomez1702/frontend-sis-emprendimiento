import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasDoloresComponent } from './problemas-dolores.component';

describe('ProblemasDoloresComponent', () => {
  let component: ProblemasDoloresComponent;
  let fixture: ComponentFixture<ProblemasDoloresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemasDoloresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemasDoloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
