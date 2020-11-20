import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesClienteComponent } from './acciones-cliente.component';

describe('AccionesClienteComponent', () => {
  let component: AccionesClienteComponent;
  let fixture: ComponentFixture<AccionesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
