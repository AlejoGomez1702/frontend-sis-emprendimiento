import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosAlegriasClienteComponent } from './beneficios-alegrias-cliente.component';

describe('BeneficiosAlegriasClienteComponent', () => {
  let component: BeneficiosAlegriasClienteComponent;
  let fixture: ComponentFixture<BeneficiosAlegriasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiosAlegriasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosAlegriasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
